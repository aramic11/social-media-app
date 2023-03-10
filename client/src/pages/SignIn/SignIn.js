import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { useStyles, theme } from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";
import LOGIN from "../../graphql/User/SignIn";
import { StoreContext } from "../../store/store";
import { Alert } from "@material-ui/lab";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";

const SignInForm = () => {
  // Getting the store context and styles
  const context = useContext(StoreContext);
  const classes = useStyles();

  // Setting up state for handling form errors and form data
  const [error, setError] = useState("");
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  // Destructuring form data for readability
  const { username, password } = userFormData;

  // Mutation hook for signing in user
  const [signIn] = useMutation(LOGIN);

  // Function for updating form data state when input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // Function for handling form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validating form input
    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    // Clearing previous errors
    setError("");

    try {
      // Signing in user and setting user data in context
      const {
        data: { login: userData },
      } = await signIn({
        variables: { ...userFormData },
      });
      context.login(userData);
      window.location.assign("/");
    } catch (error) {
      // Setting errors thrown by the GraphQL server
      setError(error.graphQLErrors[0].message);
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <form
              className={classes.form}
              noValidate
              onSubmit={handleFormSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                label="Username"
                name="username"
                required
                fullWidth
                autoFocus
                onChange={handleInputChange}
                value={username}
              />

              <TextField
                variant="outlined"
                margin="normal"
                name="password"
                label="Password"
                type="password"
                required
                fullWidth
                onChange={handleInputChange}
                value={password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>

              {error && (
                <Alert severity="error" className={classes.error}>
                  {error}
                </Alert>
              )}

              <Grid container>
                <Grid item>
                  <Link href="/Register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInForm;
