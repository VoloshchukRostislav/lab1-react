const ActivityItem = ({ action, date }) => {
  return (
    <div>
      <p>{action}</p>
      <small>{date}</small>
    </div>
  );
};

export default ActivityItem;