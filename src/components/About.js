import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");

    return <UserClass name="Sohel (Class)" address="West Bengal" phone="12345" />;
  }
}

export default About;
