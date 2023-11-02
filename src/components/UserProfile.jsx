import { useContext } from "react";
import { UserData } from "../contexts/UserContext";

const UserProfile = () => {
  const { userDetails, setUserDetails } = useContext(UserData);

  const logoutBtnHandler = () => setUserDetails({ name: "" });
  

  return (
    <div className="user-profile">
      {userDetails?.name?.length === 0 ? (
        <div className="login">
          <p>Please Login to see Profile</p>
          <a href="/login">Login</a>
        </div>
      ) : (
        <div className="profile">
          <p>{userDetails?.name}</p>
          <button className="logout" onClick={logoutBtnHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
