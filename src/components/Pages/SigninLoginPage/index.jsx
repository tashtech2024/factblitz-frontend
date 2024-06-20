/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import NavBar from "../../NavBar";

function SigninLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setUsername(!isLogin)
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with', { username,password });
    } else {
      console.log('Signing up with', { username, password });
    }
  };

  return (
    <div className="AppSignIn">
      <NavBar/>
      <br/>
      {/* Coming Soon Img */}
       <img
        src="https://img.freepik.com/free-vector/coming-soon-text-grunge-background_91128-1643.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=ais_user"
        width="300"
        height="300"
      />
      
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={handleToggle}>
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default SigninLoginPage;