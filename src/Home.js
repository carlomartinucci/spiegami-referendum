import React, { Component } from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

import { argumentsFromTopic } from "./Theorem.js"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referendum: props.route.referendum
    }
  }
  render() {
    console.log(argumentsFromTopic(this.state.referendum))
    return (
      <div
        className="home-container"
        style={{
          backgroundColor: lightBaseTheme.palette.accent3Color,
          color: lightBaseTheme.palette.alternateTextColor
        }}>
        <div className="hero text-center">
          <h1 id="Spiegami">Spiegami</h1>
          <h3>il Referendum Costituzionale <br/> del 4 dicembre 2016</h3>
          <RaisedButton
            secondary
            style={{minWidth: "50vw", height: "calc(24px + 3vw)", marginTop: "5em", marginBottom: "5em"}}
            buttonStyle={{minWidth: "50vw", height: "calc(24px + 3vw)"}}
            overlayStyle={{minWidth: "50vw", height: "calc(24px + 3vw)", lineHeight: "calc(24px + 3vw)"}}
            labelStyle={{fontSize: "calc(12px + 2vw)"}}
            label="Va bene, spiegami tutto"
            containerElement={<Link to="/referendum" />}
          />
        </div>
        <div className="text-center"
          style={{
            marginTop: "2em"
          }}>
          <div style={{marginBottom: "3em"}}>Oppure, vai a uno dei temi</div>
          <div className="button-tema-wrapper"><RaisedButton primary label="Senato" containerElement={<Link to="/referendum/senato" />} /></div>
          <div className="button-tema-wrapper"><RaisedButton primary label="Rapporto Stato - Regioni" containerElement={<Link to="/referendum/stato-regioni" />} /></div>
          <div className="button-tema-wrapper"><RaisedButton primary label="Altre questioni" containerElement={<Link to="/referendum/altro" />} /></div>
          <div className="button-tema-wrapper"><RaisedButton disabled label="Questioni politiche" /></div>
        </div>
        <div className="text-center"
          style={{
            marginTop: "5em"
          }}>
          <div>Oppure, vai direttamente a un argomento</div>
          <div className="flat-argomenti">
            <span>SENATO:</span>
            &nbsp;
            <FlatButton label="Ruolo e funzioni" style={{top: "12px"}} containerElement={<Link to="/referendum/senato/ruolo_e_funzioni" />}/>
            <FlatButton label="Modalità di elezione" style={{top: "12px"}} containerElement={<Link to="/referendum/senato/modalità_di_elezione" />}/>
            <FlatButton label="Il procedimento legislativo" style={{top: "12px"}} containerElement={<Link to="/referendum/senato/il_procedimento_legislativo" />}/>
            <FlatButton label="Diritti dei senatori e statuto delle minoranze" style={{top: "12px"}} containerElement={<Link to="/referendum/senato/diritti_dei_senatori_e_statuto_delle_minoranze" />}/>
          </div>
          <div className="flat-argomenti">
            <span>RAPPORTO STATO - REGIONI:</span>
            &nbsp;
            <FlatButton label="Conflitti di competenza" style={{top: "12px"}} containerElement={<Link to="/referendum/stato-regioni/conflitti_di_competenza" />} />
            <FlatButton disabled label="Competenze speciali a regioni ordinarie" />
          </div>
          <div className="flat-argomenti">
            <span>ALTRE QUESTIONI:</span>
            &nbsp;
            <FlatButton label="Formulazione e discussione dei decreti legge" style={{top: "12px"}} containerElement={<Link to="/referendum/altro/formulazione_e_discussione_dei_decreti_legge" />} />
            <FlatButton label="Sistema delle garanzie" style={{top: "12px"}} containerElement={<Link to="/referendum/altro/garanzie" />} />
            <FlatButton label="Iniziativa popolare" style={{top: "12px"}} containerElement={<Link to="/referendum/altro/iniziativa_popolare" />} />
            <FlatButton label="Semplificazione istituzionale" style={{top: "12px"}} containerElement={<Link to="/referendum/altro/semplificazione_istituzionale" />} />
          </div>
          <div className="flat-argomenti">
            <span>OLTRE IL MERITO:</span>
            &nbsp;
            <FlatButton label="Riforma storica o conservatrice" style={{top: "12px"}} containerElement={<Link to="/referendum/oltre_il_merito/riforma_storica_o_conservatrice" />} />
            <FlatButton label="Rischi per la democrazia" style={{top: "12px"}} containerElement={<Link to="/referendum/oltre_il_merito/rischi_per_la_democrazia" />} />
            <FlatButton label="Il metodo" style={{top: "12px"}} containerElement={<Link to="/referendum/oltre_il_merito/il_metodo" />} />
            <FlatButton label="Questioni politiche" style={{top: "12px"}} containerElement={<Link to="/referendum/oltre_il_merito/questioni_politiche" />} />
          </div>
        </div>
    	</div>
    )
  }
}