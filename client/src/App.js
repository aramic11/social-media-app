import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { StoreProvider } from "./store/store";
import "./App.css";

const App = () => {
  return (
    // Wrap the entire app with StoreProvider to make the store available to all components
    <StoreProvider>
      <Router>
        <Container>
          {/* The Navbar component is displayed on every page */}
          <Navbar />
          
          {/* Define routes for each page */}
         
        </Container>
      </Router>
    </StoreProvider>
  );
};

export default App;
