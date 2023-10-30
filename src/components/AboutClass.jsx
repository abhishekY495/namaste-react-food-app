import React from "react";
import ProfileCard from "./ProfileCard";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      profileData: {},
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/abhishekY495");
    const data = await response.json();

    this.setState({
      profileData: data,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="class-component-card">
        <p className="number">{count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <ProfileCard profileData={this.state.profileData} />
      </div>
    );
  }
}

export default AboutClass;
