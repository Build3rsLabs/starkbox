interface TaskStatusProps {
  status: 'open' | 'in_progress' | 'completed';
}

const TaskStatus = ({ status }: TaskStatusProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'open':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-bnb-yellow';
      case 'completed':
        return 'bg-bnb-text-dim';
      default:
        return 'bg-bnb-text-dim';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`inline-flex h-2 w-2 rounded-full ${getStatusColor()}`} />
      <span className="text-sm text-bnb-text-dim capitalize">
        {status.replace('_', ' ')}
      </span>
    </div>
  );
};

export default TaskStatus;