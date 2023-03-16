import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import App from "./App";
// import { DonateApp } from "./pages/DonateButton";

// Set up the HTTP link for Apollo Client to connect to the GraphQL server
const httpLink = createHttpLink({
  // uri: "https://anime-amigos.herokuapp.com/graphql",
  uri: "http://localhost:3001/graphql", // Replace with your GraphQL server URL
});

// Set up the authorization link to attach the token to the headers
const authLink = setContext(() => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "", // Attach the token to the Authorization header
    },
  };
});

// Create the Apollo Client with the HTTP and authorization links and the in-memory cache
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Render the app with the Apollo Client provider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    {/* <DonateApp /> */}
  </ApolloProvider>,
  document.getElementById("root") // Render the app in the HTML element with the ID "root"
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
