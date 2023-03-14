import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: "15px",
    padding: "50px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#f44336",
    color: "#FFFFFF",
    borderRadius: "20px",
    padding: "10px 50px",
    fontSize: "1.5rem",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  error: {
    marginTop: "2%",
    fontFamily: "Arial, sans-serif",
    color: "#f44336",
    fontSize: "1.2rem",
  },
}));

export default useStyles;