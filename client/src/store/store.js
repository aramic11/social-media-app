import React, { createContext, useReducer } from "react";
import { authReducer } from "./auth";
import decode from "jwt-decode";

// Set initial state for auth-related state
const authInitialState = {
  user: null,
};

// Check if token exists in localStorage
if (localStorage.getItem("token")) {
  // If token exists, decode it to get the payload
  const decodedToken = decode(localStorage.getItem("token"));

  // Check if token has expired
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token"); // Remove token if it has expired
  } else {
    authInitialState.user = decodedToken; // Set user object to the decoded token payload
  }
}

// Create context object for the state and its updater functions
const StoreContext = createContext({ user: null });

// Create provider component that wraps its children with the context object
const StoreProvider = (props) => {
  // Use authReducer to update the state object based on dispatched actions
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  // Define login function to update state with user data and save token to localStorage
  const login = (userData) => {
    localStorage.setItem("token", userData.authToken);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  // Define logout function to remove token from localStorage and reset state
  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  // Provide state and its updater functions to children via context object
  return (
    <StoreContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { StoreContext, StoreProvider };

