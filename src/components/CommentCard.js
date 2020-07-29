import React from "react";
import { Paper } from "@material-ui/core";

const CommentCard = ({ comment, removeComment}) => (
  
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <Paper>
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{comment.body}</p>
            <footer>
              - author <cite title="Source Title">{comment.user}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              
              onClick={() => removeComment(comment.link_id, comment.id)}
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </Paper>
    </div>
  </div>
);

export default CommentCard;
