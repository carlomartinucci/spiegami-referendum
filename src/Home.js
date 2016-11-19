import React, { Component } from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
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
          <div className="button-tema-wrapper"><RaisedButton disabled label="Il resto" /></div>
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
            <FlatButton label="Il procedimento legislativo" style={{top: "12px"}} containerElement={<Link to="/referendum/stato-regioni/il_procedimento_legislativo" />} />
          </div>
          <div className="flat-argomenti">
            <span>IL RESTO:</span>
            &nbsp;
            <FlatButton disabled label="Sistema delle garanzie" />
            <FlatButton disabled label="Partecipazione popolare" />
            <FlatButton disabled label="Semplificazione istituzionale" />
          </div>
          <div className="flat-argomenti">
            <span>QUESTIONI POLITICHE:</span>
            &nbsp;
            <FlatButton disabled label="La legittimità del Parlamento" />
            <FlatButton disabled label="Le anomalie nell'iter" />
            <FlatButton disabled label="L'ampiezza del consenso parlamentare" />
            <FlatButton disabled label="Il destino del Governo legato all'esito del Referendum" />
          </div>
        </div>
    	</div>
    )
  }
}