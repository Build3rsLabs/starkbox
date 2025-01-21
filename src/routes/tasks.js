import express from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validate.js';
import { taskRegistry, getTaskDetails } from '../utils/starknet.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

// Validation schemas
const createTaskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1),
  rewardAmount: z.string().regex(/^\d+$/),
  rewardToken: z.string(),
  deadline: z.number().int().positive()
});

// Routes
router.post('/', validateRequest(createTaskSchema), async (req, res, next) => {
  try {
    const { title, description, rewardAmount, rewardToken, deadline } = req.body;

    const tx = await taskRegistry.create_task(
      title,
      description,
      rewardAmount,
      rewardToken,
      deadline
    );
    await provider.waitForTransaction(tx.transaction_hash);

    const taskId = await taskRegistry.task_count();
    const task = await getTaskDetails(taskId);

    res.status(201).json(task);
  } catch (error) {
    logger.error('Failed to create task:', error);
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const taskCount = await taskRegistry.task_count();
    const tasks = await Promise.all(
      Array.from({ length: taskCount }, (_, i) => getTaskDetails(i + 1))
    );

    res.json(tasks);
  } catch (error) {
    logger.error('Failed to get tasks:', error);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const task = await getTaskDetails(req.params.id);
    res.json(task);
  } catch (error) {
    logger.error(`Failed to get task ${req.params.id}:`, error);
    next(error);
  }
});

export const taskRoutes = router;