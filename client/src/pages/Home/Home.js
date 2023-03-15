import React from "react";
import { useQuery } from "@apollo/client";
import GET_POSTS from "../../graphql/Post/GetPosts";
import { useStyles, theme } from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";
import PostCard from "../../components/PostCard/PostCard";
import { DonateApp } from "../DonateButton";
import {
  Grid,
  CircularProgress,
  Typography,
  Container,
} from "@material-ui/core"; // imports Material UI components

const Home = () => {
  // This component is a functional component named Home
  const { loading, data: { getPosts: posts } = {} } = useQuery(GET_POSTS); // This line uses the useQuery hook to fetch data from the GraphQL server

  const classes = useStyles(); // This line initializes the styling classes

  return loading ? ( // This is a ternary operator that checks if the data is still loading
    <CircularProgress /> // This displays a loading spinner if the data is still loading
  ) : (
    posts && ( // If the data has loaded, this checks if there are any posts available
      <ThemeProvider theme={theme}>
        <Grid>
          <Container component="main" className={classes.title}>
            {/* These are Typography components that display the page title and a description */}
            <Typography component="h1" variant="h3" align="center">
              Anime Home
            </Typography>
            <Typography component="h1" variant="h5" align="center">
              Welcome to our collection of anime posts! Whether you're a
              long-time fan of the medium or just getting started, we're
              confident you'll find something here to pique your interest. So
              sit back, relax, and dive into the wonderful world of anime!
            </Typography>
          </Container>

          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {/* This maps over the posts and renders a PostCard component for each post */}
            {posts.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <PostCard post={post} />
                {/* <DonateApp /> */}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  );
};

export default Home;
