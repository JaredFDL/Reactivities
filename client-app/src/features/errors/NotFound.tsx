import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

const NotFound = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Oops - we have looked everywhere but could not find what you are looking
        for!
      </Header>
      <Segment.Inline>
        <Button
          as={Link}
          to="/activities"
          content="Return to activities page"
        />
      </Segment.Inline>
    </Segment>
  );
};

export default NotFound;
