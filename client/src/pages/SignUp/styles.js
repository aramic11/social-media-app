import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    padding: "2rem",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#F26B8A",
    width: "5rem",
    height: "5rem",
    border: "2px solid white",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
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
    backgroundColor: "#F26B8A",
    color: "white",
    fontWeight: "bold",
    borderRadius: "2rem",
    padding: "0.5rem 1.5rem",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#FF99B4",
    },
  },
  error: {
    margin: "1% 0% 3% 0%",
    color: "#F26B8A",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
}));

export default useStyles;
