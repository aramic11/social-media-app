import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { StoreProvider } from "./store/store";
import Comment from "./pages/Comment/Comment";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Post from "./pages/Post/Post";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import FollowButton from "./pages/Follow/FollowButton";
import UserSearch from "./pages/UserSearch/UserSearch";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/posts/:postId" component={Comment} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/userSearch" component={UserSearch} />
          <Route exact path="/follow" component={FollowButton} />
        </Container>
      </Router>
    </StoreProvider>
  );
};

export default App;
