import React from 'react';

const Signup = () => {
  return (
    <div className="login-signup-container">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="form-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
