
import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { StoreContext } from "../../store/store";
import { useStyles, theme } from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";
import GET_POST from "../../graphql/Post/GetPost";
import CREATE_COMMENT from "../../graphql/Comment/CreateComment";
import moment from "moment";
import PostLikeButton from "../../components/LikeButton/PostLikeButton";
import CommentLikeButton from "../../components/LikeButton/CommentLikeButton";
import OptionButton from "../../components/OptionButton/OptionButton";
import DeleteCommentButton from "../../components/OptionButton/DeleteComment";
import {
  CircularProgress,
  Typography,
  Card,
  TextField,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";

const CommentPage = (props) => {
  const classes = useStyles();

  const postId = props.match.params.postId;

  const { user } = useContext(StoreContext); // StoreContext used to access the current user state

  // Fetch post data from the server using useQuery hook
  const { loading, data: { getPost } = {} } = useQuery(GET_POST, {
    variables: {
      postId,
    },
  });

  const [comment, setComment] = useState(""); // Use state hook to manage the comment input field

  const [createComment] = useMutation(CREATE_COMMENT); // useMutation hook used to create new comment

  const handleCommentSubmit = async (event) => {
    try {
      // Call the createComment mutation function to submit new comment
      await createComment({
        variables: { postId, content: comment },
      });
      setComment(""); // Reset the comment field to empty string
    } catch (error) {
      console.error(error);
    }
  };

  let postAndComment;

  // If post data is still being fetched, display a loading spinner
  if (loading) {
    postAndComment = <CircularProgress />;
  } else {
    // Extract post data from the query result
    const {
      id,
      content,
      title,
      dateCreated,
      username,
      imageUrl,
      postLikes,
      postLikeCount,
      comments,
    } = getPost;



    postAndComment = (
      <div>
        <ThemeProvider theme={theme}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="h2"
                className={classes.username}
              >
                {username}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="h2"
                className={classes.date}
              >
                {moment(dateCreated).fromNow()}
              </Typography>

              <CardMedia
                className={classes.media}
                image={
                  imageUrl ||
                  "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
              />

              <Typography
                variant="h6"
                component="h2"
                className={classes.content}
              >
                {content}
              </Typography>

              <CardActions className={classes.like}>
                <PostLikeButton
                  user={user}
                  post={{ id, postLikes, postLikeCount }}
                />

                <Typography variant="body2" color="textSecondary">
                  {postLikeCount}
                </Typography>

                <IconButton
                  aria-label="settings"
                  className={classes.optionButtonOverlay}
                >
                  <OptionButton user={user} post={{ id, username }} />
                </IconButton>
              </CardActions>
            </CardContent>
          </Card>

          {user && (
            <Card className={classes.makeComment}>
              <CardContent className={classes.inputField}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  label="Post a comment"
                  name="comment"
                  size="small"
                  required
                  fullWidth
                  onChange={(event) => setComment(event.target.value)}
                  value={comment}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={comment.trim() === ""}
                  onClick={handleCommentSubmit}
                >
                  Submit
                </Button>
              </CardContent>
            </Card>
          )}

          {comments.map((comment) => (
            <Card className={classes.comment} key={comment.id}>
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                  className={classes.commentUsername}
                >
                  {comment.username}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                  className={classes.date}
                >
                  {moment(comment.dateCreated).fromNow()}
                </Typography>

                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.commentContent}
                >
                  {comment.content}
                </Typography>

                <CardActions className={classes.like}>
                  <CommentLikeButton
                    user={user}
                    postId={id}
                    commentId={comment.id}
                    comment={comment}
                  />

                  <Typography variant="body2" color="textSecondary">
                    {comment.commentLikeCount}
                  </Typography>

                  <IconButton
                    aria-label="settings"
                    className={classes.deleteButtonOverlay}
                  >
                    {user && user.username === comment.username && (
                      <DeleteCommentButton postId={id} commentId={comment.id} />
                    )}
                  </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </ThemeProvider>
      </div>
    );
  }
  return postAndComment;
};

export default CommentPage;
