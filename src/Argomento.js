import React, { Component } from 'react'
import { jsonToMaterial } from './Theorem.js'

export default class Argomento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referendum: props.route.referendum
    }
  }
  render() {
    const tema = this.props.params.tema
    const argomento = this.props.params.argomento
    const display_theorem = (quale) => {
      if (this.state.referendum[tema][argomento + quale]) {
        return jsonToMaterial(this.state.referendum[tema][argomento + quale])
      }
    }
    const display_title   = (quale) => {
      if (this.state.referendum[tema][argomento + quale]) {
        if (quale==="") {return <h4>Spiegami che cosa cambia con la Riforma</h4> }
        else if (quale === "_SI") {return <h4>Spiegami perché SI</h4>}
        else if (quale === "_NO") {return <h4>Spiegami perché NO</h4>}
      }
    }
    return (
    	<div className="container">
        <div className="full_column">
          {display_title("")}
          {display_theorem("")}
        </div>
        <div className="half_column">
          {display_title("_SI")}
          {display_theorem("_SI")}
        </div>
        <div className="divider"></div>
        <div className="half_column">
          {display_title("_NO")}
    	    {display_theorem("_NO")}
    	  </div>
    	</div>
    )
  }
}