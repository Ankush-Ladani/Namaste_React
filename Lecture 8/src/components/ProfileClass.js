import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count2: 0,
    };

    console.log("Child-Constructor" + this.props.name);
  }

  componentDidMount() {
    console.log("Child - componentDidMount" + this.props.name);
  }

  render() {
    console.log("Child - Render" + this.props.name);
    return (
      <>
        <h1>Profile Class Component</h1>
        <h3> {this.props.name} </h3>
      </>
    );
  }
}

export default Profile;
