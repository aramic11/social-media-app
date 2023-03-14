import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textDecoration: "none",
    color: "white",
    flexGrow: 1,
  },
  button: {},
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
      light: "#ff6090",
      dark: "#b0003a",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        background: "linear-gradient(45deg, #e91e63 0%, #9c27b0 50%, #673ab7 100%)",
      },
    },
  },
});


export { useStyles, theme };
