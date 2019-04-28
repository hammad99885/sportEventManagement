import * as types from "../constants";
import axios from "axios";
import { loadState } from "../Services/localStorage";

// let localState =loadState()
let formState = {
  mailFormat: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  incorrectCredits: Boolean,
  userLoggedIn: false,
  userData: {},
  authStatus: false,
  authMessage: "",
  Fname: "",
  Lname: "",
  fullName: "",
  email: "",
  password: "",
};

// formState = {formState, ...loadState}

export const AuthReducer = (state = formState, action) => {
  switch (action.type) {
    case types.ON_FORM_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.target.id]: action.payload.target.value
      };

    case types.LOGIN:
      return action.payload.status
        ? {
            ...state,
            userData: action.payload.user,
            userLoggedIn: Boolean(action.payload.status),
            authStatus: Boolean(action.payload.status),
            authMessage: action.payload.message
          }
        : {
            ...state,
            userData: {},
            userLoggedIn: Boolean(action.payload.status),
            authStatus: Boolean(action.payload.status),
            authMessage: action.payload.message
          };

    case types.REGISTER:
      return action.payload.status
        ? {
            ...state,
            userData: action.payload.user,
            userLoggedIn: Boolean(action.payload.status),
            authStatus: Boolean(action.payload.status),
            authMessage: action.payload.message
          }
        : {
            ...state,
            userData: {},
            userLoggedIn: Boolean(action.payload.status),
            authStatus: Boolean(action.payload.status),
            authMessage: action.payload.message
          };

    case types.USER_PRESENT:
      return {
        ...state,
        userData: action.payload.localData.userData,
        authStatus: action.payload.localData.authStatus,
        userLoggedIn: action.payload.localData.userLoggedIn
      };

    case types.LOGOUT:
      return {
        ...state,
        userLoggedIn: false,
        userData: {},
        authStatus: false,
        authMessage: ""
      };

    case types.INVALID_CREDITS:
    return {...state, authMessage:action.payload}

    default:
      return state;
  }
};
