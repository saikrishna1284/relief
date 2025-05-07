import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./ResetPassword.css"; // Optional: Add CSS for this page

const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Add your logic to save the new password (e.g., API call)
    console.log("Username:", username);
    console.log("New Password:", newPassword);
    alert("Password reset successfully!");
  };

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="card">
        <h2 className="heading">Reset Password</h2>
        <form onSubmit={handleSubmit} className="form">
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
            <label htmlFor="newPassword" className="label">
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <button type="submit" className="button">
            Save
          </button>
          <Link to="/" className="back-to-login">
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;