import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "../components/Forms";
import ApiService from "../components/services/ApiService";
import "../components/Forget.css";


export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});
  const [status, setStatus] = useState(true);
  const [otp, setOtp] = useState(true);
  const [password, setPassword] = useState(true);
  const [value, setValue] = useState("");
  // eslint-disable-next-line
  const [errors, setErrors] = useState(false);

  const navigate = useNavigate();

  const validateforgetPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const forgetPassword = (e) => {
    e.preventDefault();

    const validate = validateforgetPassword();
    console.log("called");
    if (validate) {
      alert("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    // e.target.value ? setStatus(false) : setStatus(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("forget password caled");
    let data = { email: email };
    // navigate("/otp-validate", { state: email })
    ApiService.forgetPwd(data)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("Otp Sent");
        navigate("/Reset-password", { state: email })
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
        <div className="container">
          <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
            <div className="auth-background-holder"></div>
            <div className="auth-background-mask"></div>
          </div>
          <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
            <div className="d-flex flex-column align-content-end">
              <div className="auth-body mx-auto">
                <p>Forget Password</p>
                <div className="auth-form-container text-start">
                  <form
                    className="auth-form"
                    method="POST"
                    onSubmit={forgetPassword}
                    autoComplete={"off"}
                  >
                    <div className="email mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className={`form-control ${
                          validate.validate && validate.validate.email
                            ? "is-invalid "
                            : ""
                        }`}
                        id="email"
                        disabled={!status}
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={handleChange}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.email
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.email
                          ? validate.validate.email[0]
                          : ""}
                      </div>
                    </div>
         
                      <div className="text-center">
                        <button
                          onClick={handleSubmit}
                          variant="success"
                          type="submit"
                          className="btn btn-primary "
                          disabled={email.length === 0}
                        >
                          Reset Password
                        </button>
                      </div>
                   
                  </form>

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
        </div>
      </div>
    </div>
  );
}
