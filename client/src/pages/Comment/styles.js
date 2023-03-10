import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    position: "relative",
    margin: "7% 15% 5% 15%",
  },
  title: {
    padding: "3% 0% 0% 3%",
  },
  username: {
    display: "inline-block",
    padding: "0% 3%",
    marginBottom: "2%",
  },
  makeComment: {
    maxWidth: 1200,
    position: "relative",
    margin: "5% 15% 5% 15%",
  },
  comment: {
    maxWidth: 1200,
    position: "relative",
    margin: "3% 15% 3% 15%",
  },
  inputField: {
    margin: "2.5% 2.5% 1.5% 2.5%",
  },
  date: {
    display: "inline-block",
    paddingLeft: "10",
  },
  media: {
    paddingTop: "100%",
    marginBottom: "5%",
  },
  content: {
    paddingLeft: "3%",
  },
  like: {
    paddingLeft: "1%",
  },
  commentUsername: {
    display: "inline-block",
    padding: "2% 3%",
  },
  commentContent: {
    padding: "0% 0% 1% 3%",
  },
  optionButtonOverlay: {
    position: "absolute",
    top: "1%",
    right: "5px",
  },
  deleteButtonOverlay: {
    position: "absolute",
    top: "58%",
    right: "3px",
  },
}));

const theme = createTheme({
  overrides: {
    MuiCardActions: {
      root: {
        padding: "1.5px",
      },
    },
    MuiCardContent: {
      root: {
        padding: "0",
        "&:last-child": {
          paddingBottom: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        fontSize: "0",
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 0,
        marginBottom: "8px",
      },
    },
    MuiTypography: {
      h6: {
        fontFamily: "Arial, sans-serif",
        fontSize: "1.3rem",
        color: "#4791db",
      },
      h5: {
        fontFamily: "Arial, sans-serif",
        color: "#f44336",
        fontSize: "3rem",
        textAlign: "center",
      },
    },
  },
  palette: {
    primary: {
      main: "#4791db",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export { useStyles, theme };
