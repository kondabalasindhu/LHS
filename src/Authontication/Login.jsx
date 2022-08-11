import React from "react";
// import { useState } from "react";
import ApiService from "../components/services/ApiService";
import jwt from "jwt-decode";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { username: username, password: password };
    ApiService.login(loginData)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("Access_Token", res.data.token);
        // const user = localStorage.getItem('user')
        const username = jwt(res.data.token).sub;
        console.log(username);
        sessionStorage.setItem("username", username);
        setErrors(false);
        alert(`Login Successful `);
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
        setErrors(true);
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h3>Welcome</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <form  onSubmit={handleSubmit}></form> */}
            <label>User Name</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              // isInvalid={errors}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {errors && (
            <p className="text-danger mb-1">
              The provided credentials do not match our records.
            </p>
          )}

          <div className="mb-3">
            <label>Password</label>
            <input
              required
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" variant="success" className="btn btn-primary">
              Login
            </button>
          </div>
          <Link to="/forget-password" className="forgot-password text-right">
            forget password?
          </Link>
        </form>
      </div>
    </div>
  );
}
