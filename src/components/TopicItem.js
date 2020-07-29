import React from "react";
import { connect } from "react-redux";
import { GridListTile, GridListTileBar } from "@material-ui/core";
import { Link } from "react-router-dom";

const TopicItem = ({ topic }) => {
  return (
    <GridListTile
      key={topic.id}
      cols={3 / 7}
      style={{
        padding: "1em",
        margin: "1em",
        width: "22%",
        alignItems: "center",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Link
        to={{
          pathname: `/topics/${topic.id}`,
        }}
      >
        <img
          src={topic.img}
          style={{ width: "100%", height: "auto" }}
          alt={topic.name}
        />
        <GridListTileBar
          title={<h2 style={{ textAlign: "center" }}>{topic.name}</h2>}
        ></GridListTileBar>
      </Link>
    </GridListTile>
  );
};

export default connect(null)(TopicItem);
