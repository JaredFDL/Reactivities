import {
  Card,
  CardContent,
  CardHeader,
  CardMeta,
  CardDescription,
  Image,
  Button,
} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

const ActivityDetails = () => {
  const { activityStore } = useStore();

  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity!.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity!.title}</CardHeader>
        <CardMeta>
          <span>{activity!.date}</span>
        </CardMeta>
        <CardDescription>{activity!.description}</CardDescription>
      </CardContent>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={() => openForm(activity!.id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={cancelSelectedActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
