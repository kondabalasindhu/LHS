import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import ApiService from "../components/services/ApiService";

export default function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    ApiService.signup(data)
      .then((res) => {
        // console.log(res.data);
        alert("Registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Registration form</h3>
          <div className="mb-3">
            <label htmlFor="first name">First name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name"
              defaultValue={data.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              defaultValue={data.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="user name"
              defaultValue={data.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              defaultValue={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              defaultValue={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone number">Phone number</label>
            <input
              type="number"
              name="phone number"
              className="form-control"
              placeholder="Enter phonenumber"
              defaultValue={data.phoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob">date of birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              placeholder="Enter dob"
              defaultValue={data.dob}
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-3">
            <label>Gender</label>
            <input
              type="radio"
              name="Gender"
              className=""
              value="HTML"
              placeholder="enter gender"
              defaultValue={data.username}
              onChange={handleChange}
            />
          
          </div> */}

          <div className="mb-3">
            <label htmlFor="gender">Gender </label>{" "}
            <input
              type="radio"
              id="male"
              name="gender"
              onChange={(e) => {
                data.gender = "Male";
              }}
              defaultValue={data.gender}
            />
              <label htmlFor="male">male</label> {" "}
            <input
              type="radio"
              id="female"
              name="gender"
              // value="female"
              defaultValue={data.gender}
              onChange={(e) => {
                data.gender = "female";
              }}
            />
              <label htmlFor="female">female</label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
