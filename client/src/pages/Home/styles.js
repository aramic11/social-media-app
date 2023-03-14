import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 50px",
    backgroundColor: "#E6F2F8",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  title: {
    padding: "5% 10%",
    color: "#3B5998",
    fontSize: "3rem",
    fontFamily: "Brush Script MT, cursive",
    textShadow: "1px 1px #8b9dc3",
  },
}));

const theme = createTheme({
  overrides: {
    MuiTypography: {
      h3: {
        fontFamily: "Nunito, sans-serif",
        fontWeight: "bold",
        color: "#3B5998",
        textShadow: "1px 1px #8b9dc3",
      },
      h5: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: "bold",
        color: "#3B5998",
        textShadow: "1px 1px #8b9dc3",
      },
    },
  },
  palette: {
    primary: {
      main: "#3B5998",
    },
    secondary: {
      main: "#8b9dc3",
    },
  },
});

export { useStyles, theme };