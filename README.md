# StarkBox Backend

Backend service for the StarkBox platform, handling task management and submissions on StarkNet.

## Features

- Task creation and management
- Submission handling
- Reward distribution
- User progress tracking

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your values
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - List all tasks
- `GET /api/tasks/:id` - Get task details

### Submissions
- `POST /api/submissions` - Submit a task
- `POST /api/submissions/review` - Review a submission
- `GET /api/submissions/:taskId/:submitter` - Get submission details

### Users
- `GET /api/users/:address/tasks` - Get user's tasks and submissions

## Smart Contracts

The backend interacts with two main smart contracts:

1. TaskRegistry - Manages tasks and submissions
2. RewardDistributor - Handles reward distribution

## Development

- Run tests: `npm test`
- Format code: `npm run format`
- Check types: `npm run typecheck`