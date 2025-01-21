use starknet::ContractAddress;

#[starknet::interface]
trait IERC20 {
    fn transfer(ref self: TContractState, recipient: ContractAddress, amount: u256) -> bool;
    fn transfer_from(
        ref self: TContractState,
        sender: ContractAddress,
        recipient: ContractAddress,
        amount: u256
    ) -> bool;
}

#[starknet::interface]
trait ITaskRegistry {
    fn get_submission(
        self: @TContractState,
        task_id: u256,
        submitter: ContractAddress
    ) -> Submission;
}