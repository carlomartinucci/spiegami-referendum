import React, { Component } from 'react'
import { argomenti } from "./arguments.json"
import { Link } from 'react-router'

export default class Tema extends Component {
  render() {
    const base_url = "/referendum/" + this.props.params.tema + "/"
    const links = argomenti[this.props.params.tema].map(
      (argomento) => (
        <Link key={argomento} to={base_url + argomento}>{argomento}</Link>
      )
    )
    return (
      <div>
        {this.props.params.tema}<br/>
        I temi dell'argomento<br/>
        {links}
        <br/>
        <Link to="/referendum"> Torna agli argomenti</Link>
      </div>
    )
  }
}