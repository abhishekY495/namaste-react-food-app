import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserData } from "../contexts/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserDetails } = useContext(UserData);
  const navigate = useNavigate();

  const loginBtnhandler = () => {
    console.log(username.length);
    console.log(password.length);
    if (username.length > 0 && password.length > 0) {
      setUserDetails({ name: username });
      navigate("/profile");
    } else {
      alert("Cannot be empty");
    }
  };

  return (
    <div id="login-container">
      <div>
        <p>
          Username <sup className="mandatory">*</sup>
        </p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <p>
          Password <sup className="mandatory">*</sup>
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={loginBtnhandler}>Login</button>
    </div>
  );
};

export default Login;
