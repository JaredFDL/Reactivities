import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

const ActivitiesFilters = () => {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 25 }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Activities"></Menu.Item>
        <Menu.Item content="I'm going"></Menu.Item>
        <Menu.Item content="I'm hosting"></Menu.Item>
      </Menu>
      <Header />
      <Calendar />
    </>
  );
};

export default ActivitiesFilters;
