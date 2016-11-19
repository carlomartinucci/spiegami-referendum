import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Referendum extends Component {
  render() {
    return (
      <div>
        Referendum<br/>
        <Link to="/referendum/senato">Senato</Link><br/>
        <Link to="/referendum/stato-regioni">Stato - Regioni</Link><br/>
        <Link to="/referendum/resto">Resto</Link><br/>
        <Link to="/referendum/politiche">Politiche</Link><br/>
      </div>
    )
  }
}