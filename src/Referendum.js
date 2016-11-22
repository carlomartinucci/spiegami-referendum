import React, { Component } from 'react'
//import { Link } from 'react-router'
//import { argomenti } from "./arguments.json"
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavLink from './NavLink'
import Divider from 'material-ui/Divider';
import { argumentsFromTopic } from "./Theorem.js"
import { humanize } from './stringHelper.js'


export default class Referendum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referendum: props.route.referendum
    }
  }
  render() {
    const argomenti = argumentsFromTopic(this.state.referendum)
    function getArgomenti(tema) {
      return argomenti[tema].map((argomento) => (
          <MenuItem
            containerElement={<NavLink to={`/referendum/${tema}/${argomento}`} />}
            key={`${tema}/${argomento}`}
            primaryText={humanize(argomento)}
            insetChildren
          />
        )
      )
    }
    function getTema(tema) {
      return (
        [<MenuItem
          containerElement={<NavLink to={`/referendum/${tema}`} />}
          key={tema}
          primaryText={humanize(tema)}
          open
        />,
        getArgomenti(tema),
        <Divider/>]
      )
    }
    const temi = Object.keys(argomenti).map(getTema)
    // const temi = Object.keys(argomenti).map(argomenti_list)
    const paperStyle = {
      display: 'inline-block',
      margin: '16px -50% 16px 50%',
      transform: 'translateX(-50%)'
    };
    return (
      <div className="container">
        <h3 className="text-center">Si discute su</h3>
        <Paper style={paperStyle}>

        <Menu>
          {temi}
        </Menu>

        </Paper>


      </div>
    )
  }
}