import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#F26B8A",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    margin: "1% 0% 3% 0%",
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#4791db",
    },
    secondary: {
      main: "#F26B8A",
    },
  },
  overrides: {
    MuiTypography: {
      h5: {
        fontFamily: "Cinzel Decorative, sans-serif",
        color: "#F26B8A",
      },
    },
  },
});

export { useStyles, theme };
