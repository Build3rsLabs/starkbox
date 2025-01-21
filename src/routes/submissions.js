import express from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validate.js';
import { taskRegistry, getSubmissionDetails } from '../utils/starknet.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

// Validation schemas
const submitTaskSchema = z.object({
  taskId: z.number().int().positive(),
  submissionUrl: z.string().url()
});

const reviewSubmissionSchema = z.object({
  taskId: z.number().int().positive(),
  submitter: z.string(),
  approved: z.boolean()
});

// Routes
router.post('/', validateRequest(submitTaskSchema), async (req, res, next) => {
  try {
    const { taskId, submissionUrl } = req.body;

    const tx = await taskRegistry.submit_task(taskId, submissionUrl);
    await provider.waitForTransaction(tx.transaction_hash);

    const submission = await getSubmissionDetails(taskId, req.user.address);
    res.status(201).json(submission);
  } catch (error) {
    logger.error('Failed to submit task:', error);
    next(error);
  }
});

router.post('/review', validateRequest(reviewSubmissionSchema), async (req, res, next) => {
  try {
    const { taskId, submitter, approved } = req.body;

    const tx = await taskRegistry.review_submission(taskId, submitter, approved);
    await provider.waitForTransaction(tx.transaction_hash);

    const submission = await getSubmissionDetails(taskId, submitter);
    res.json(submission);
  } catch (error) {
    logger.error('Failed to review submission:', error);
    next(error);
  }
});

router.get('/:taskId/:submitter', async (req, res, next) => {
  try {
    const submission = await getSubmissionDetails(req.params.taskId, req.params.submitter);
    res.json(submission);
  } catch (error) {
    logger.error(`Failed to get submission:`, error);
    next(error);
  }
});

export const submissionRoutes = router;