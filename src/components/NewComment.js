import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../actions/commentActions";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }
  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const comment = { ...this.state };
    this.props.addComment(this.props.link.id, comment);
    // this.setState({

    //   body: ""

    // });
    
    
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form
                  className="form-horizontal"
                  onSubmit={this.handleOnSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="body" className="col-md-4 control-label">
                      Comment
                    </label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addComment })(CommentForm);
