import { Provider, Account, Contract } from 'starknet';
import { config } from '../config.js';

// Initialize provider
const provider = new Provider({ nodeUrl: config.nodeUrl });

// Initialize admin account
export const adminAccount = new Account(
  provider,
  config.adminAddress,
  config.adminPrivateKey
);

// Initialize contract instances
export const taskRegistry = new Contract(
  require('../abi/TaskRegistry.json'),
  config.taskRegistryAddress,
  provider
);

export const rewardDistributor = new Contract(
  require('../abi/RewardDistributor.json'),
  config.rewardDistributorAddress,
  provider
);

// Helper functions
export async function getTaskDetails(taskId) {
  try {
    const task = await taskRegistry.get_task(taskId);
    return {
      id: taskId,
      title: task.title,
      description: task.description,
      rewardAmount: task.reward_amount,
      rewardToken: task.reward_token,
      deadline: task.deadline,
      status: task.status,
      creator: task.creator,
      submissionCount: task.submission_count
    };
  } catch (error) {
    throw new Error(`Failed to get task details: ${error.message}`);
  }
}

export async function getSubmissionDetails(taskId, submitter) {
  try {
    const submission = await taskRegistry.get_submission(taskId, submitter);
    return {
      taskId,
      submitter,
      submissionTime: submission.submission_time,
      status: submission.status,
      submissionUrl: submission.submission_url
    };
  } catch (error) {
    throw new Error(`Failed to get submission details: ${error.message}`);
  }
}