import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

const ActivityList = observer(() => {
  const { activityStore } = useStore();
  const { selectActivity, deleteActivity, activityByDate, loading } =
    activityStore;

  const [target, setTarget] = useState("");
  const handleActivityDelete = (id: string) => {
    setTarget(id);
    deleteActivity(id);
  };

  return (
    <Segment>
      <Item.Group divided>
        {activityByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={activity.id}
                  loading={loading && target === activity.id}
                  onClick={() => handleActivityDelete(activity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
});

export default ActivityList;
