import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ViewModuleSharpIcon from "@material-ui/icons/ViewModuleSharp";
import CreateIcon from "@material-ui/icons/Create";
import { Home } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";
import InfoIcon from "@material-ui/icons/Info";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import CancelIcon from "@material-ui/icons/Cancel";
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

const AuthBar = (props) => {
  if (!!props.userReducer.loggedIn) {
    return (
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
                <ViewModuleSharpIcon />
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

          <Link to="/logout" className={props.classes.link}>
            <ListItem button>
              <ListItemIcon>
                <CancelIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </Link>

          <Link to="/about" className={props.classes.link}>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>

          <a href="https://awesomeweb.design" className={props.classes.link}>
            <ListItem button>
              <ListItemIcon>
                <SentimentVerySatisfiedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Personal" />
            </ListItem>
          </a>
        </List>
      </Drawer>
    );
  } else {
    return (
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
                <ViewModuleSharpIcon />
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
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Signup" />
            </ListItem>
          </Link>

          <Link to="/login" className={props.classes.link}>
            <ListItem button>
              <ListItemIcon>
                <VpnKeyTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </Link>

          <Link to="/about" className={props.classes.link}>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>

          <a href="https://awesomeweb.design" className={props.classes.link}>
            <ListItem button>
              <ListItemIcon>
                <SentimentVerySatisfiedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Personal" />
            </ListItem>
          </a>
        </List>
      </Drawer>
    );
  }
};

export default withStyles(styles)(AuthBar);
