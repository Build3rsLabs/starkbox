#[cfg(test)]
mod tests {
    use array::ArrayTrait;
    use result::ResultTrait;
    use option::OptionTrait;
    use starknet::ContractAddress;
    use starknet::testing::{set_caller_address, set_contract_address};
    use super::TaskRegistry;

    // Test accounts
    const ADMIN: felt252 = 1;
    const USER1: felt252 = 2;
    const USER2: felt252 = 3;
    const TOKEN: felt252 = 4;

    #[test]
    fn test_create_task() {
        // Setup
        let mut state = TaskRegistry::contract_state();
        set_caller_address(ADMIN);
        TaskRegistry::constructor(ref state, ADMIN);

        // Create task
        let title = 'Test Task';
        let description = 'Test Description';
        let reward_amount = 1000;
        let deadline = 1000;

        TaskRegistry::create_task(
            ref state,
            title,
            description,
            reward_amount,
            TOKEN,
            deadline
        );

        // Verify task
        let task = TaskRegistry::get_task(@state, 1);
        assert(task.title == title, 'Wrong title');
        assert(task.reward_amount == reward_amount, 'Wrong reward');
        assert(task.status == TaskStatus::Open, 'Wrong status');
    }

    #[test]
    fn test_submit_task() {
        // Setup task
        let mut state = TaskRegistry::contract_state();
        set_caller_address(ADMIN);
        TaskRegistry::constructor(ref state, ADMIN);
        
        TaskRegistry::create_task(
            ref state,
            'Test Task',
            'Description',
            1000,
            TOKEN,
            1000
        );

        // Submit task
        set_caller_address(USER1);
        let submission_url = 'https://github.com/pr/123';
        TaskRegistry::submit_task(ref state, 1, submission_url);

        // Verify submission
        let submission = TaskRegistry::get_submission(@state, 1, USER1);
        assert(submission.submitter == USER1, 'Wrong submitter');
        assert(submission.status == SubmissionStatus::Pending, 'Wrong status');
    }

    #[test]
    fn test_review_submission() {
        // Setup task and submission
        let mut state = TaskRegistry::contract_state();
        set_caller_address(ADMIN);
        TaskRegistry::constructor(ref state, ADMIN);
        
        TaskRegistry::create_task(
            ref state,
            'Test Task',
            'Description',
            1000,
            TOKEN,
            1000
        );

        set_caller_address(USER1);
        TaskRegistry::submit_task(ref state, 1, 'https://github.com/pr/123');

        // Review submission
        set_caller_address(ADMIN);
        TaskRegistry::review_submission(ref state, 1, USER1, true);

        // Verify status updates
        let submission = TaskRegistry::get_submission(@state, 1, USER1);
        assert(submission.status == SubmissionStatus::Approved, 'Wrong submission status');

        let task = TaskRegistry::get_task(@state, 1);
        assert(task.status == TaskStatus::Completed, 'Wrong task status');
    }
}