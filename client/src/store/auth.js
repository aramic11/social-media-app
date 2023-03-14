// Define action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Define initial state for authentication-related state
const authInitialState = {
  user: null,
};

// Define reducer function for authentication-related state
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      // When the LOGIN action is dispatched, update the user property of the state
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      // When the LOGOUT action is dispatched, reset the state to the initial state
      return {
        ...state,
        ...authInitialState,
      };

    default:
      // If an action is dispatched that is not recognized, return the current state
      return state;
  }
};

// Export the initial state and the reducer function
export { authInitialState, authReducer };
