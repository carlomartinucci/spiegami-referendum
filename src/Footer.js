import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Spiegami&trade; 2016</p>
        <p>Pensato con amore da <a href='https://carlomartinucci.github.io' target="_blank">Carlo Martinucci</a></p>
        <p>con il <Link to="/about">contributo</Link> e l'aiuto di tanti amici.</p>
        <p>Materiale sul referendum tratto da <a href="http://www.referendumcostituzionale2016.it/" target="_blank">referendumcostituzionale2016.it</a></p>
      </div>
    );
  }
}
