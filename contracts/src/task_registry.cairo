#[starknet::contract]
mod TaskRegistry {
    use starknet::{ContractAddress, get_caller_address};
    use array::ArrayTrait;
    use box::BoxTrait;
    use option::OptionTrait;
    use zeroable::Zeroable;

    #[storage]
    struct Storage {
        // Task storage
        tasks: LegacyMap<u256, Task>,
        task_count: u256,
        // User task mappings
        user_tasks: LegacyMap<(ContractAddress, u256), bool>,
        // Task submissions
        submissions: LegacyMap<(u256, ContractAddress), Submission>,
        // Admin
        admin: ContractAddress,
    }

    #[derive(Drop, Serde)]
    struct Task {
        id: u256,
        title: felt252,
        description: felt252,
        reward_amount: u256,
        reward_token: ContractAddress,
        deadline: u64,
        status: TaskStatus,
        creator: ContractAddress,
        submission_count: u256,
    }

    #[derive(Drop, Serde)]
    struct Submission {
        task_id: u256,
        submitter: ContractAddress,
        submission_time: u64,
        status: SubmissionStatus,
        submission_url: felt252,
    }

    #[derive(Drop, Serde)]
    enum TaskStatus {
        Open,
        InProgress,
        Completed,
        Cancelled,
    }

    #[derive(Drop, Serde)]
    enum SubmissionStatus {
        Pending,
        Approved,
        Rejected,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        TaskCreated: TaskCreated,
        TaskUpdated: TaskUpdated,
        SubmissionCreated: SubmissionCreated,
        SubmissionReviewed: SubmissionReviewed,
    }

    #[derive(Drop, starknet::Event)]
    struct TaskCreated {
        task_id: u256,
        creator: ContractAddress,
        reward_amount: u256,
        reward_token: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    struct TaskUpdated {
        task_id: u256,
        new_status: TaskStatus,
    }

    #[derive(Drop, starknet::Event)]
    struct SubmissionCreated {
        task_id: u256,
        submitter: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    struct SubmissionReviewed {
        task_id: u256,
        submitter: ContractAddress,
        status: SubmissionStatus,
    }

    #[constructor]
    fn constructor(ref self: ContractState, admin_address: ContractAddress) {
        self.admin.write(admin_address);
        self.task_count.write(0);
    }

    #[external]
    fn create_task(
        ref self: ContractState,
        title: felt252,
        description: felt252,
        reward_amount: u256,
        reward_token: ContractAddress,
        deadline: u64,
    ) {
        let caller = get_caller_address();
        let task_id = self.task_count.read() + 1;

        // Create new task
        let task = Task {
            id: task_id,
            title,
            description,
            reward_amount,
            reward_token,
            deadline,
            status: TaskStatus::Open,
            creator: caller,
            submission_count: 0,
        };

        // Store task and increment counter
        self.tasks.write(task_id, task);
        self.task_count.write(task_id);

        // Emit event
        self.emit(TaskCreated { task_id, creator: caller, reward_amount, reward_token });
    }

    #[external]
    fn submit_task(ref self: ContractState, task_id: u256, submission_url: felt252) {
        let caller = get_caller_address();
        let task = self.tasks.read(task_id);
        
        // Validate task exists and is open
        assert(task.status == TaskStatus::Open, 'Task not open');
        assert(!self.user_tasks.read((caller, task_id)), 'Already submitted');

        // Create submission
        let submission = Submission {
            task_id,
            submitter: caller,
            submission_time: starknet::get_block_timestamp(),
            status: SubmissionStatus::Pending,
            submission_url,
        };

        // Store submission
        self.submissions.write((task_id, caller), submission);
        self.user_tasks.write((caller, task_id), true);

        // Update task
        let mut updated_task = task;
        updated_task.submission_count += 1;
        self.tasks.write(task_id, updated_task);

        // Emit event
        self.emit(SubmissionCreated { task_id, submitter: caller });
    }

    #[external]
    fn review_submission(
        ref self: ContractState,
        task_id: u256,
        submitter: ContractAddress,
        approved: bool,
    ) {
        let caller = get_caller_address();
        let task = self.tasks.read(task_id);
        
        // Only admin or task creator can review
        assert(caller == self.admin.read() || caller == task.creator, 'Not authorized');

        let mut submission = self.submissions.read((task_id, submitter));
        let status = if approved {
            SubmissionStatus::Approved
        } else {
            SubmissionStatus::Rejected
        };

        // Update submission status
        submission.status = status;
        self.submissions.write((task_id, submitter), submission);

        // If approved, mark task as completed
        if approved {
            let mut updated_task = task;
            updated_task.status = TaskStatus::Completed;
            self.tasks.write(task_id, updated_task);
            self.emit(TaskUpdated { task_id, new_status: TaskStatus::Completed });
        }

        // Emit review event
        self.emit(SubmissionReviewed { task_id, submitter, status });
    }

    #[view]
    fn get_task(self: @ContractState, task_id: u256) -> Task {
        self.tasks.read(task_id)
    }

    #[view]
    fn get_submission(
        self: @ContractState,
        task_id: u256,
        submitter: ContractAddress,
    ) -> Submission {
        self.submissions.read((task_id, submitter))
    }
}