import React, { Component } from 'react';
import { Link } from 'react-router'
//import FacebookShare from "./FacebookShare.js"

//      <div className="text-center fb-share" style={{marginTop: '30px'}}><FacebookShare/></div>
export default class Footer extends Component {
  render() {

    return (
      <div>

      <div className="footer">
        <p><span className="spiegami">Spiegami</span>&trade; 2016</p>
        <p>
          Pensato con amore da <a href='https://carlomartinucci.github.io' target="_blank">Carlo Martinucci</a><br/>
          con il <Link to="/about">contributo</Link> e l'aiuto di tanti amici.
        </p>
        <p>
          Materiale sul referendum tratto da<br/>
          <a href="http://www.referendumcostituzionale2016.it/" target="_blank">referendumcostituzionale2016.it</a>
        </p>
      </div>
      </div>
    );
  }
}
