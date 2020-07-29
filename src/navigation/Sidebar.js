import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
// import PersonIcon from "@material-ui/icons/Person";
import { Computer, Home } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";

const drawerWidth = 240;

const styles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: 0,
  },
  link: {
    textDecoration: "none",
  },
});

const Sidebar = (props) => (
  <Drawer
    variant="permanent"
    classes={{
      root: props.classes.drawer,
      paper: props.classes.drawerPaper,
    }}
    anchor="left"
  >
    <List>
      <Link to="/" className={props.classes.link}>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>

      <Link to="/topics" className={props.classes.link}>
        <ListItem button>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Topics" />
        </ListItem>
      </Link>

      <Link to="/links" className={props.classes.link}>
        <ListItem button>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="All Links" />
        </ListItem>
      </Link>

      <Link to="/signup" className={props.classes.link}>
        <ListItem button>
          <ListItemIcon>
            <Computer />
          </ListItemIcon>
          <ListItemText primary="Signup" />
        </ListItem>
      </Link>

      <Link to="/login" className={props.classes.link}>
        <ListItem button>
          <ListItemIcon>
            <Computer />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </Link>

    </List>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
