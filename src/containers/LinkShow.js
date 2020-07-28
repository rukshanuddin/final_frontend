import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLink } from "../actions/linkActions";

class LinkShow extends Component {
  componentDidMount() {
    let paramsId = parseInt(this.props.match.params.id, 10);
    this.props.fetchLink(paramsId);
  }

  render() {
    
    const showLink = this.props.link;
    debugger
    return (
      <div><h1>{showLink ? showLink.name : "Link"}</h1></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    link: state.link,

  };
};

export default connect(mapStateToProps, { fetchLink })(
  LinkShow
);