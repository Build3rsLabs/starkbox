#[starknet::contract]
mod RewardDistributor {
    use starknet::{ContractAddress, get_caller_address};
    use array::ArrayTrait;
    use box::BoxTrait;
    use option::OptionTrait;
    use zeroable::Zeroable;

    #[storage]
    struct Storage {
        task_registry: ContractAddress,
        admin: ContractAddress,
        // Token escrow for task rewards
        task_escrow: LegacyMap<u256, EscrowInfo>,
    }

    #[derive(Drop, Serde)]
    struct EscrowInfo {
        amount: u256,
        token: ContractAddress,
        claimed: bool,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        RewardEscrowed: RewardEscrowed,
        RewardClaimed: RewardClaimed,
    }

    #[derive(Drop, starknet::Event)]
    struct RewardEscrowed {
        task_id: u256,
        amount: u256,
        token: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    struct RewardClaimed {
        task_id: u256,
        recipient: ContractAddress,
        amount: u256,
        token: ContractAddress,
    }

    #[constructor]
    fn constructor(
        ref self: ContractState,
        admin_address: ContractAddress,
        task_registry_address: ContractAddress,
    ) {
        self.admin.write(admin_address);
        self.task_registry.write(task_registry_address);
    }

    #[external]
    fn escrow_reward(ref self: ContractState, task_id: u256, amount: u256, token: ContractAddress) {
        let caller = get_caller_address();
        
        // Transfer tokens to this contract
        // Note: Requires approval from token owner
        IERC20Dispatcher { contract_address: token }.transfer_from(caller, get_contract_address(), amount);

        // Store escrow info
        let escrow = EscrowInfo { amount, token, claimed: false };
        self.task_escrow.write(task_id, escrow);

        // Emit event
        self.emit(RewardEscrowed { task_id, amount, token });
    }

    #[external]
    fn claim_reward(ref self: ContractState, task_id: u256) {
        let caller = get_caller_address();
        let escrow = self.task_escrow.read(task_id);
        
        // Verify not already claimed
        assert(!escrow.claimed, 'Already claimed');

        // Verify submission was approved
        let task_registry = ITaskRegistryDispatcher { contract_address: self.task_registry.read() };
        let submission = task_registry.get_submission(task_id, caller);
        assert(submission.status == SubmissionStatus::Approved, 'Not approved');

        // Mark as claimed and transfer reward
        let mut updated_escrow = escrow;
        updated_escrow.claimed = true;
        self.task_escrow.write(task_id, updated_escrow);

        IERC20Dispatcher { contract_address: escrow.token }.transfer(caller, escrow.amount);

        // Emit event
        self.emit(RewardClaimed {
            task_id,
            recipient: caller,
            amount: escrow.amount,
            token: escrow.token
        });
    }

    #[view]
    fn get_escrow(self: @ContractState, task_id: u256) -> EscrowInfo {
        self.task_escrow.read(task_id)
    }
}