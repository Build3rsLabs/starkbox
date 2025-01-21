import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3001,
  nodeUrl: process.env.STARKNET_NODE_URL || 'https://alpha-mainnet.starknet.io',
  taskRegistryAddress: process.env.TASK_REGISTRY_ADDRESS,
  rewardDistributorAddress: process.env.REWARD_DISTRIBUTOR_ADDRESS,
  adminPrivateKey: process.env.ADMIN_PRIVATE_KEY,
  adminAddress: process.env.ADMIN_ADDRESS
};