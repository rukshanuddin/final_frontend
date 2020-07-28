import React, { Component } from "react";
import LinkItem from "../components/LinkItem";
import { connect } from "react-redux";
import { fetchLinks } from "../actions/linkActions";

class AllLinks extends Component {
  componentDidMount() {
    this.props.fetchLinks();
  }

  render() {
    const links = this.props.links.map((link, i) => (
      <LinkItem key={i} link={link} />
    ));
    return (
      <div>
        <h3>Link List</h3>
        <ul className="collection">{links}</ul>
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
