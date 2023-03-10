import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    position: "relative",
  },
  media: {
    paddingTop: "80%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  username: {
    display: "inline-block",
    paddingRight: "5%",
  },
  date: {
    display: "inline-block",
    paddingLeft: "5%",
  },
  comment: {
    marginTop: "1%",
    marginLeft: "6%",
  },
  overlay: {
    position: "absolute",
    top: "67.5%",
    left: "85.5%",
  },
  overrides: {
    MuiCardActions: {
      padding: "0px",
    },
  },
}));

const theme = createTheme({
  overrides: {
    MuiCardActions: {
      root: {
        padding: "1px",
      },
    },
    MuiCardContent: {
      root: {
        padding: "8px 16px",
      },
    },
    MuiIconButton: {
      root: {
        fontSize: "0",
      },
    },
    MuiTypography: {
      h6: {
        fontFamily: "Raleway, sans-serif",
      },
    },
  },
  palette: {
    primary: {
      main: "#4791db",
    },
    secondary: {
      main: "#F26B8A",
    },
  },
});

export { useStyles, theme };
