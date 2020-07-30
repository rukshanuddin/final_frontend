import React, { Component } from "react";
import AuthBar from "./AuthBar";
import { connect } from "react-redux";

class Bar extends Component {
  render() {
    return (
      <div className="App">
        <AuthBar userReducer={this.props.userReducer} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps)(Bar);
