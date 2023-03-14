import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import DELETE_COMMENT from "../../graphql/Comment/DeleteComment";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  CircularProgress,
} from "@material-ui/core";

// A dialog component for confirming the deletion of a comment
const DeleteCommentDialog = ({ open, onClose, onConfirm }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Are you sure you want to delete this comment?"}
    </DialogTitle>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        No
      </Button>

      <Button onClick={onConfirm} color="primary" autoFocus>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

// A button component for deleting a comment
const DeleteCommentButton = ({ postId, commentId, onComplete }) => {
  const [deleteComment, { loading, error }] = useMutation(DELETE_COMMENT);
  const [open, setOpen] = useState(false);

  // Open the dialog when the delete button is clicked
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the dialog when the user clicks the cancel button
  const handleClose = () => {
    setOpen(false);
  };

  // Handle the deletion of the comment
  const handleAgree = async () => {
    try {
      await deleteComment({
        variables: { postId, commentId },
      });
      // Call the onComplete function to update the comment list
      onComplete();
    } catch (error) {
      console.error(error);
    }
    handleClose();
  };

  // Render the delete button and the delete dialog
  return (
    <>
      <DeleteIcon variant="outlined" onClick={handleClickOpen} />
      <DeleteCommentDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleAgree}
      />
      {loading && <CircularProgress />}
      {error && <div>{error.message}</div>}
    </>
  );
};

export default DeleteCommentButton;


