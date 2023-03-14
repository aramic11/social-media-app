import { makeStyles } from "@material-ui/core/styles";

// Creating styles using makeStyles hook
const useStyles = makeStyles((theme) => ({
  optionButton: {
    display: "block",
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  deleteButtonOverlay: {
    position: "absolute",
    top: "60%",
    right: "4px",
  },
}));

export default useStyles;
