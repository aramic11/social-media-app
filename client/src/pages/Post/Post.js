import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import useStyles from "./styles";
import { theme } from "../SignIn/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CREATE_POST from "../../graphql/Post/CreatePost";
import { Alert } from "@material-ui/lab";
import {
  Typography,
  TextField,
  Button,
  Container,
  CssBaseline,
} from "@material-ui/core";

const Post = () => {
  const classes = useStyles();

  // Initializing state variables
  const [postFormData, setPostFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });
  const [error, setError] = useState("");

  // Destructuring state variables
  const { title, content, imageUrl } = postFormData;

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostFormData({ ...postFormData, [name]: value });
  };

  // Mutation hook to create a new post
  const [createPost] = useMutation(CREATE_POST);

  // Event handler for form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validating form data
    if (!title || !content) {
      setError("Title and content are required");
      return;
    }

    // Clearing error message
    setError("");

    try {
      // Calling the createPost mutation with form data as variables
      await createPost({
        variables: { ...postFormData },
      });

      // Redirecting to homepage after successful post creation
      window.location.assign("/");
    } catch (error) {
      // Setting error message if an error occurs during mutation
      setError(error.graphQLErrors[0].message);
    }
  };

  return (
    // Applying the custom theme to the component
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sharing a future adventure
          </Typography>
          {/* Form for creating a new post */}
          <form noValidate className={classes.form} onSubmit={handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              label="title"
              name="title"
              autoFocus
              required
              fullWidth
              onChange={handleInputChange}
              value={title}
            />

            <TextField
              variant="outlined"
              margin="normal"
              label="content"
              name="content"
              required
              fullWidth
              multiline
              onChange={handleInputChange}
              value={content}
            />

            <TextField
              variant="outlined"
              margin="normal"
              name="imageUrl"
              label="imageUrl"
              size="small"
              required
              fullWidth
              onChange={handleInputChange}
              value={imageUrl}
            />

            {/* Button for submitting the form */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              submit
            </Button>
            {/* Displaying error message if there is any */}
            {error && (
              <Alert severity="error" className={classes.error}>
                {error}
              </Alert>
            )}
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Post;
