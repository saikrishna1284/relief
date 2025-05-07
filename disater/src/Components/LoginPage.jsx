import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }
    setError("");
    console.log("Username:", username);
    // Never log passwords in production
    alert("Login Submitted!");
  };

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="card">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="toggle-password"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
          <Link to="/reset-password" className="forgot-password">
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
