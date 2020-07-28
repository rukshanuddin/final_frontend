import React, { Component } from "react";
import LinkItem from "../components/LinkItem";
import { connect } from "react-redux";
import { fetchLinks } from "../actions/linkActions";

class AllLinks extends Component {
  componentDidMount() {
    this.props.fetchLinks();
  }

  render() {
    const topics = this.props.topics.map((topic, i) => (
      <LinkItem key={i} topic={topic} />
    ));
    return (
      <div>
        <h3>Link List</h3>
        <ul className="collection">{topics}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links,
  };
};

export default connect(mapStateToProps, { fetchLinks })(AllLinks);
