import React from "react";

class ProfileCard extends React.Component {
  render() {
    const { profileData } = this.props;
    console.log(profileData);
    return (
      <div className="profile-card">
        <img src={profileData?.avatar_url} alt={profileData.name} />
        <div>
          <p>{profileData?.name}</p>
          <p className="username">@{profileData?.login}</p>
        </div>
        <a href={profileData?.blog} target="_blank">
          {profileData?.blog}
        </a>
      </div>
    );
  }
}

export default ProfileCard;
