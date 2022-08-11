import React from "react";
import { useState } from "react";
import ApiService from "../components/services/ApiService";
import { useNavigate, Link, useLocation } from "react-router-dom";



export default function ResetPassword() {
    const location=useLocation().state;
    // console.log(location);
const [validate, setValidate] = useState({});

const [status, setStatus] = useState(true);
  const [otp, setOtp] = useState(true);

  const [value, setValue] = useState("");
  const [password, setPassword] = useState(true);
  const [errors, setErrors] = useState(false);






   const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("forget password caled");
    let data = { otp: otp,password : password };
    console.log(data);
    ApiService.ResetPassword(data)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("password changed succesfully");
      })
      .catch((error) => {
        setErrors(true);
        console.log(error);
      });
    setStatus(false);
  };



 return (
    
    <div className="auth-wrapper">
      <div className="auth-inner">
       
              <div className="auth-body mx-auto">
                <p>Forget Password</p>
                <div className="auth-form-container text-start">
                <label>Enter otp</label>
                        <input
                          type="number"
                          className={`form-control ${
                            validate.validate && validate.validate.email
                              ? "is-invalid "
                              : ""
                          }`}
                          id="otp"
                          name="otp"
                          value={otp}
                        
                          placeholder="otp"
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <label>Enter Password</label>
                        <input
                          type="password"
                          className={`form-control ${
                            validate.validate && validate.validate.email
                              ? "is-invalid "
                              : ""
                          }`}
                          id="password"
                          name="password"
                          value={password}
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" form="nameform"  variant="success" value="Submit" onClick={handleSubmit}>
                          Submit
                        </button>
                  <hr />
                  <div className="auth-option text-center pt-2">
                    <Link className="text-link" to="/sign-in">
                      Back to Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
      
   );
 }
                       


               