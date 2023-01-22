import React from "react";

class ProfileGithub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        public_repos: "",
        avatar_url: "",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    console.log("componentDidMount");
    const data = await fetch("https://api.github.com/users/Ankush-Ladani");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        public_repos: json.public_repos,
        avatar_url: json.avatar_url,
      },
    });

    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2> Github Username : {this.state.userInfo.name} </h2>
        <h2> Location : {this.state.userInfo.location} </h2>
        <h2> Public_Repos : {this.state.userInfo.public_repos} </h2>
      </div>
    );
  }
}

export default ProfileGithub;
