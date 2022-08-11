



import axios from "axios";
// const BASE_URL = "http://10.81.4.193:8080"; // Venkat pc

const BASE_URL = "http://10.81.4.231:8080"; // teju pc

// const BASE_URL = "http://10.81.4.189:8080"; // usha pc
//Header

// //get

//post
const LOGIN_API_URL = `${BASE_URL}/api
/authenticate`;

//

const SIGNUP_API_URL = `${BASE_URL}/api/register`;
const FORGET_API_URL = `${BASE_URL}/api/email`;
const RESETPASSWORD_API_URL = `${BASE_URL}/api/validate`;

//put

//delete
export function auth() {
  const token = sessionStorage.getItem("Access_Token");
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

export default new (class ApiService {
  login(data) {
    return axios.post(LOGIN_API_URL, data);
  }

  signup(data) {
    return axios.post(SIGNUP_API_URL, data);
  }

  forgetPwd(data) {
    return axios.post(FORGET_API_URL, data);
  }
  ResetPassword(data) {
    return axios.post(RESETPASSWORD_API_URL, data);
  }
})();
