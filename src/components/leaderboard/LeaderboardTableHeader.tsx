const HEADERS = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Builder' },
  { key: 'tasks', label: 'Tasks Completed' },
  { key: 'earned', label: 'Total Earned' },
];

const LeaderboardTableHeader = () => {
  return (
    <thead className="bg-stark-dark/40 backdrop-blur-sm">
      <tr>
        {HEADERS.map(({ key, label }) => (
          <th
            key={key}
            className="px-6 py-4 text-left text-sm font-semibold text-stark-primary"
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default LeaderboardTableHeader;