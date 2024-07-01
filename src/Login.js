import React from 'react';

const Login = () => {
  return (
    <div className="login-signup-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
