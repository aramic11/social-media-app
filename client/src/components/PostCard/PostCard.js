import React, { useContext } from "react";
import { StoreContext } from "../../store/store";
import { useStyles, theme } from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CommentButton from "../CommentButton/CommentButton";
import moment from "moment";
import clsx from "clsx";
import OptionButton from "../OptionButton/OptionButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostLikeButton from "../LikeButton/PostLikeButton";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Collapse,
} from "@material-ui/core";
import { DonateApp } from "../../pages/DonateButton";

const PostCard = ({
  post: {
    id,
    imageUrl,
    title,
    content,
    dateCreated,
    username,
    postLikes,
    postLikeCount,
    commentCount,
    comments,
  },
}) => {
  const { user } = useContext(StoreContext);

  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={
            imageUrl ||
            "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h6" className={classes.title}>
            {title.length > 20 ? title.substring(0, 20) + " ..." : title}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.username}
          >
            {username}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.date}
          >
            {moment(dateCreated).fromNow()}
          </Typography>

          <IconButton aria-label="settings" className={classes.overlay}>
            <OptionButton user={user} post={{ id, username }} />
          </IconButton>
        </CardContent>
        <CardActions disableSpacing>
          <PostLikeButton user={user} post={{ id, postLikes, postLikeCount }} />

          <Typography variant="body2" color="textSecondary">
            {postLikeCount}
          </Typography>

          <IconButton href={`/posts/${id}`} className={classes.comment}>
            <CommentButton user={user} post={{ comments }} />
          </IconButton>

          <Typography variant="body2" color="textSecondary">
            {commentCount}
          </Typography>

          <DonateApp />

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6" className={classes.content}>
              {content}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
};

export default PostCard;
