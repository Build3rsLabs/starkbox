import Card from '../common/Card';

interface TaskSubmissionsProps {
  taskId: string;
}

const TaskSubmissions = ({ taskId }: TaskSubmissionsProps) => {
  return (
    <Card className="mt-8">
      <h2 className="text-xl font-semibold text-bnb-yellow">Submissions</h2>
      <p className="mt-4 text-bnb-text-dim">
        No submissions yet. Be the first to submit a solution!
      </p>
    </Card>
  );
};

export default TaskSubmissions;