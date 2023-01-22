import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";
import ProfileGithub from "./ProfileGithub";
// const About = () => {
//   return (
//     <>
//       <h1>About Us Page...</h1>
//       {/* <Outlet  /> */}
//       <ProfileFunctional name="Ankush" />
//       <Profile name="Ankush" />
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Parent - constructor");
  }

  componentDidMount() {
    this.Timer = setInterval(() => {
      console.log("OPTIMIZE THIS...");
    });
    console.log("Parent - componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent - componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.Timer);
    console.log("Parent - componentWillUnmount");
  }

  render() {
    console.log("Parent - render");
    return (
      <>
        <h1>About Us Page...</h1>
        <ProfileGithub />
        {/* <ProfileFunctional name="Ankush" /> */}
        {/* <Profile name="Ankush" />
        <Profile name="Ankush 2" /> */}

        {/* <h3> {this.state.count} </h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          -
        </button> */}
      </>
    );
  }
}

export default About;
