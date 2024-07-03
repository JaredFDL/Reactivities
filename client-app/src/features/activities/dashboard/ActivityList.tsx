import { Header } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react/jsx-runtime";

const ActivityList = observer(() => {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {Array.from(groupedActivities.entries()).map(([date, activities]) => (
        <Fragment key={date}>
          <Header sub color="teal">
            {date}
          </Header>
          {activities.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </Fragment>
      ))}
    </>
  );
});

export default ActivityList;
