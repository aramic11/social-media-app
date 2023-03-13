// Importing necessary modules
import express from "express"; // for creating express app
import cors from "cors"; // to enable CORS
import { ApolloServer } from "apollo-server-express"; // for connecting to ApolloServer
import typeDefs from "./schema/schema.js"; // GraphQL schema
import resolvers from "./resolvers/resolvers.js"; // GraphQL resolvers
import mongoose from "mongoose"; // for connecting to MongoDB
import { MONGODB } from "./config.js"; // MongoDB connection URL

const app = express(); // creating express app
const PORT = process.env.PORT || 3001; // setting up default port

// Enabling Cross-Origin Resource Sharing (CORS) for express app
app.use(cors());

// Setting up ApolloServer
const server = new ApolloServer({
  typeDefs, // GraphQL schema
  resolvers, // GraphQL resolvers
  context: ({ req }) => ({ req }), // to access the request object in resolvers
  introspection: true, // for enabling GraphQL Playground in production
  playground: true, // for enabling the GraphQL Playground
});

// Applying ApolloServer middleware to express app
server.applyMiddleware({ app });

// Starting the express app on the specified port
app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});

// Connecting to MongoDB
mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to the db"))
  .catch((error) => console.log(error.message)); // handling MongoDB connection errors