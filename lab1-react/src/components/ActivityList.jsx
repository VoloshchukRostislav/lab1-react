import ActivityItem from "./ActivityItem";

const ActivityList = ({ activities }) => {

  return (
    <div>

      <h3>Activity</h3>

      {activities.map((item) => (
        <ActivityItem
          key={item.id}
          action={item.action}
          date={item.date}
        />
      ))}

    </div>
  );
};

export default ActivityList;