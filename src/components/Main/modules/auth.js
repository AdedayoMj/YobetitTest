import update from "react-addons-update";
import constants from "./actionConstant";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../utils/setAuthToken";

const isEmpty = require("is-empty");

const {
  LOGIN_ERRORS,
  SIGNUP_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  USER_CREATED,
  GET_ALL
} = constants;

// Register User
export const registerUser = (userData, history) => dispatch => {
  console.log(userData);

  axios
    .post("http://localhost:5000/api/register", userData)
    .then(res => {
      if (res.status === 200) {
        history.push("/signin");
      }
      dispatch({
        type: USER_CREATED,
        payload: res
      });
      // re-direct to login on successful register

      //
    })
    .catch(err =>
      dispatch({
        type: SIGNUP_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:5000/api/login", userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      console.log(token);
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: LOGIN_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage

  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};


// Get all Countries 
export const getAllCountries = () => dispatch => {

  axios
    .post("http://localhost:5000/api/AllCountries")
    .then(res => {
      dispatch({
        type: GET_ALL,
        payload: res.data
      });
      // re-direct to login on successful register

      //
    })
    .catch(err =>
     console.log(err)
     
    );
};


//===========================
//Actions handler
//===========================

function handleCurrentUser(state, action) {
  return update(state, {
    user: {
      $set: action.payload
    },
    isAuthenticated: {
      $set: !isEmpty(action.payload)
    }
  });
}
function handleDriverCreation(state, action) {
  return update(state, {
    newUser: {
      $set: action.payload
    }
  });
}

function handleDriverLoading(state, action) {
  return update(state, {
    loading: {
      $set: true
    }
  });
}

function handleLoginError(state, action) {
  return update(state, {
    loginError: {
      $set: action.payload
    }
  });
}

function handleSignupError(state, action) {
  return update(state, {
    signupError: {
      $set: action.payload
    }
  });
}

function handleAllCountries(state, action) {
  return update(state, {
    allCountries: {
      $set: action.payload.data
    }
  });
}

const ACTION_HANDLERS = {
  LOGIN_ERRORS: handleLoginError,
  SIGNUP_ERRORS: handleSignupError,
  SET_CURRENT_USER: handleCurrentUser,
  USER_LOADING: handleDriverLoading,
  USER_CREATED: handleDriverCreation,
  GET_ALL:handleAllCountries
};

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  loginError: {},
  signupError: {}
};

export function AuthReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
