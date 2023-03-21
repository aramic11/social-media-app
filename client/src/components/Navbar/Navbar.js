import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/store";
import { useStyles, theme } from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { DonateApp } from "../../pages/DonateButton";

const MenuAppBar = () => {
  const classes = useStyles();
  const context = useContext(StoreContext);

  return context.user ? (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
            >
              {context.user.username}
            </Typography>

            <Button color="inherit" component={Link} to="/chat">
              Chat
            </Button>

            <Button color="inherit" component={Link} to="/post">
              Post
            </Button>

            <Button color="inherit" onClick={context.logout}>
              Logout
            </Button>
            <DonateApp />
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
            >
              Home
            </Typography>

            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>

            <Button color="inherit" component={Link} to="/register">
              Register User
            </Button>

            <DonateApp component={Link} to="/donate" />
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default MenuAppBar;
