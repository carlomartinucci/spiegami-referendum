import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
//import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router'

const MainAppBar = (props) => (
  <AppBar
    title={props.title}
    iconElementRight={<IconButton><MenuIcon/></IconButton>}
    onRightIconButtonTouchTap={props.onCloseTouch}
    iconElementLeft={<IconButton containerElement={<Link to="/"/>}><FontIcon>S</FontIcon></IconButton>}
    //iconElementLeft={<FlatButton label="Spiegami" containerElement={<Link to="/"/>}/>}
  />
);

export default MainAppBar;