import * as types from "../constants";
import axios from "axios";
import { loadState } from "../Services/localStorage";

export const onInputChange = e => {
  return {
    type: types.ON_FORM_INPUT_CHANGE,
    payload: e
  };
};

export const logOut = e => {
  // console.log(e)
  return {
    type: types.LOGOUT
  };
};

export const userStat = () => {
  let localData = loadState();
  return localData
    ? {
        type: types.USER_PRESENT,
        payload: { status: true, localData }
      }
    : { type: types.USER_PRESENT, payload: { status: false, userData: {} } };
};

export const invalidCredits = message => {
  return { type: types.INVALID_CREDITS, payload: message.toString() };
};

export const onLogin = (data, His) => dispatch => {
  axios.post("http://localhost:3000/api/login", data).then(res => {
    // console.log(res.data);
    if (res.data.status) {
      setTimeout(() => {
        His.replace("/profile");
      }, 500);
    }
    dispatch({ type: types.LOGIN, payload: res.data, His });
  });
  // console.log(data)
};

export const onRegister = (data, His) => dispatch => {
  axios.post("http://localhost:3000/api/register", data).then(res => {
    // console.log(res.data);
    if (res.data.status) {
      His.replace("/");
      setTimeout(() => {
        His.replace("/profile");
      }, 500);
    }
    dispatch({ type: types.REGISTER, payload: res.data });
  });
};
