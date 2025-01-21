import express from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validate.js';
import { taskRegistry } from '../utils/starknet.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

router.get('/:address/tasks', async (req, res, next) => {
  try {
    const taskCount = await taskRegistry.task_count();
    const userTasks = [];

    // Get all tasks and filter for user's submissions
    for (let i = 1; i <= taskCount; i++) {
      try {
        const submission = await taskRegistry.get_submission(i, req.params.address);
        if (submission) {
          const task = await taskRegistry.get_task(i);
          userTasks.push({
            task: {
              id: i,
              title: task.title,
              description: task.description,
              rewardAmount: task.reward_amount,
              rewardToken: task.reward_token,
              status: task.status
            },
            submission: {
              status: submission.status,
              submissionTime: submission.submission_time,
              submissionUrl: submission.submission_url
            }
          });
        }
      } catch (error) {
        // Skip if no submission found
        continue;
      }
    }

    res.json(userTasks);
  } catch (error) {
    logger.error(`Failed to get user tasks:`, error);
    next(error);
  }
});

export const userRoutes = router;