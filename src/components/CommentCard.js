import React from "react";
import {withRouter} from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  root: {
    minWidth: 275,
    padding: "1em",
    margin:"1em",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const CommentCard = ({ comment, removeComment, classes }) => (
  <Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Comment #{comment.id}
      </Typography>
      <Typography variant="h5" component="h2">
        {comment.body}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {comment.posted}
      </Typography>
      <Typography variant="body2" component="p">
        Posted by: {comment.user}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        onClick={() => removeComment(comment.link_id, comment.id)}
        size="small"
      >
        Delete
      </Button>
    </CardActions>
  </Card>
);

export default withRouter(withStyles(styles)(CommentCard));
