import * as types from "../constants";
import axios from "axios";
import { loadState } from "../Services/localStorage";

export const onInputChange = e => {
  return {
    type: types.ON_FORM_INPUT_CHANGE,
    payload: e
  };
};

// export const onLogin = (e, email, password, mailFormat) => {
//   e.preventDefault();
//   if (mailFormat.test(email) && password) {

//     (async () => {
//       let res = await axios.post("http://localhost:3000/api/login",  { email, password });
//       return {
//         type: types.LOGIN,
//         payload: await res.data
//       };
//     })()
//     // axios
//     //   .post("http://localhost:3000/api/login", { email, password })
//     //   .then(res => {
//     //     abc = res.data;
//     //   });
//     // return {
//     //   type: types.LOGIN,
//     //   payload: ""
//     // };
//   } else
//     return {
//       type: types.LOGIN,
//       payload: {
//         staus: 0,
//         message: "Email must be in format and password is required"
//       }
//     };
// };

export const logOut = (e) =>{
  console.log(e)
  return {
    type : types.LOGOUT
  }
}

export const userStat = () => {
  let localData = loadState();
  console.log(localData)
  return localData
    ? {
        type: types.USER_PRESENT,
        payload: { status: true, localData }
      }
    : { type: types.USER_PRESENT, payload: { status: false, userData: {} } };
};

export const onLogin = (e, email, password, mailFormat, His) => dispatch => {
  e.preventDefault();
  mailFormat.test(email) && password
    ? axios
        .post("http://localhost:3000/api/login", { email, password })
        .then(res => {
          console.log(res.data);
          if (res.data.status) {
            setTimeout(() => {
              His.replace("/profile");
              alert("Login Succesfull, Wellcome", res.data.user.firstName);
            }, 500);
          }
          dispatch({ type: types.LOGIN, payload: res.data, His });
        })
    : dispatch({
        type: types.LOGIN,
        payload: {
          staus: 0,
          message: "Email must be in format and password is required"
        }
      });
  // console.log(data)
};

export const onRegister = (
  e,
  fName,
  lName,
  email,
  password,
  mailFormat,
  His
) => dispatch => {
  e.preventDefault();
  mailFormat.test(email) && password && fName && lName
    ? axios
        .post("http://localhost:3000/api/register", {
          firstName: fName,
          lastName: lName,
          email,
          password
        })
        .then(res => {
          console.log(res.data);
          if (res.data.status) {
            His.replace("/");
            setTimeout(
              () =>
                alert(
                  "Account Created Successfully, Wellcome",
                  res.data.user.firstName
                ),
              500
            );
            console.log("if", His);
          }
          dispatch({ type: types.REGISTER, payload: res.data });
        })
    : dispatch({
        type: types.REGISTER,
        payload: {
          staus: 0,
          message:
            "Email must be in format and password/ First Name/ Last Name is required"
        }
      });
};

// action.payload.preventDefault();
// let user = mailFormat.test(email)
//   ? axios
//       .post("http://localhost:3000/api/login", { email, password })
//       .then(res => res.data)
//   : "abc";
// console.log(user);
// let login = loginReq();
// console.log(login);
// return { ...state };
