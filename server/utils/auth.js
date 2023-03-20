// Importing necessary modules
import jwt from "jsonwebtoken"; // for generating and verifying JWT tokens
import { SECRET_KEY } from "../config.js"; // for JWT secret key


// Function to generate a JWT token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "2h" } // The token will expire in 2 hours
  );
};

// Function to verify if the user is registered
const authUser = (context) => {
  const authToken = context.req.headers.authorization;
  if (authToken) {
    const token = authToken.split(" ").pop().trim();
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY); // Verify the JWT token with the secret key
        return user;
      } catch (err) {
        throw new Error("Invalid token"); // Throw an error if the token is invalid
      }
    }
    throw new Error(
      `Authentication token must be "Authorization" : "Bearer [token]"`
    ); // Throw an error if the token is not in the correct format
  }
  throw new Error("Authorization token must be provided"); // Throw an error if the token is not provided
};



// Export the functions
export { generateToken, authUser };

