import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../SignIn/styles";
import CREATE_USER from "../../graphql/User/SignUp";
import { StoreContext } from "../../store/store";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    marginTop: theme.spacing(2),
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userFormData;

  const context = useContext(StoreContext);

  const [addUser, { loading }] = useMutation(CREATE_USER, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message);
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const validate = () => {
    if (!email || !username || !password) {
      return "All fields are required";
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      return "Enter a valid email address.";
    }

    const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    if (!usernameRegex.test(username)) {
      return "Usernames can only use letters, numbers, underscores and periods";
    } else if (username.length > 20) {
      return "Username no more than 20 characters";
    }

    if (password.length < 6) {
      return "Password min 6 characters";
    }

    return "";
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return false;
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      const userData = data.createUser;
      context.login(userData);
      window.location.assign("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
            </Typography>
      {error && (
        <Alert className={classes.error} severity="error">
          {error}
        </Alert>
      )}
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={handleInputChange}
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handleInputChange}
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Register"}
        </Button>
        <Grid container>
          <Grid item>
            <Link href="/signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
</ThemeProvider>
);
};

export default SignUpForm;
