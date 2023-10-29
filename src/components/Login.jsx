const Login = () => {
  return (
    <div id="login-container">
      <div>
        <p>
          Email <sup className="mandatory">*</sup>
        </p>
        <input type="email" />
      </div>
      <div>
        <p>
          Password <sup className="mandatory">*</sup>
        </p>
        <input type="password" />
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
