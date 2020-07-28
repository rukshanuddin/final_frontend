import React from "react";
import { connect } from "react-redux";

const LinkItem = ({ link }) => {
  return (
    <li className="collection-item">
      Link Name: {link.name}
      <br />
      url: {link.url} <br />
    </li>
  );
};

export default connect(null)(LinkItem);
