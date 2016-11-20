import React, { Component } from 'react'
import { argomenti } from "./arguments.json"
import { Link } from 'react-router'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { humanize } from './stringHelper.js'

export default class Tema extends Component {
  render() {
    const base_url = "/referendum/" + this.props.params.tema + "/"
//    const links = argomenti[this.props.params.tema].map(
//      (argomento) => (
//        <Link key={argomento} to={base_url + argomento}>{argomento}</Link>
//      )
//    )
    const menu_items = argomenti[this.props.params.tema].map(
      (argomento) => (
        <MenuItem
            containerElement={<Link to={base_url + argomento} />}
            key={base_url + argomento}
            primaryText={humanize(argomento)}
          />
      )
    )
    const paperStyle = {
      display: 'inline-block',
      margin: '16px 0 16px 50%',
      transform: 'translateX(-50%)'
    };
    return (
      <div className="container">
        <h3 className="text-center">{humanize(this.props.params.tema)} - gli argomenti sono</h3>
        <Paper style={paperStyle}>
        <Menu>
        {menu_items}
        </Menu>
        </Paper>

      </div>
    )
  }
}