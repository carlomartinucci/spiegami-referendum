import React, { Component } from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { humanize } from './stringHelper.js'

import { argumentsFromTopic } from "./Theorem.js"
import FacebookShare from "./FacebookShare.js"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referendum: props.route.referendum
    }
  }
  render() {
    const argomenti = argumentsFromTopic(this.state.referendum)
    function getTemi(argomenti) {
      return Object.keys(argomenti).map(
        (tema) => <div key={tema + "-wrapper"} className="button-tema-wrapper"><RaisedButton primary label={humanize(tema)} containerElement={<Link to={`referendum/${tema}/${argomenti[tema][0]}`} />} /></div>
      )
    }
    function getSingoliArgomentiDiUnTema(tema) {
      const argg = argomenti[tema].map(
        (argomento) => <FlatButton key={argomento} label={humanize(argomento)} style={{top: "12px"}} containerElement={<Link to={`/referendum/${tema}/${argomento}`} />}/>
      )
      return (
        <div key={tema + "-div"} className="flat-argomenti">
          <span>{tema.toUpperCase()}:</span>
          &nbsp;
          {argg}
        </div>
      )
    }
    const getArgomenti = Object.keys(argomenti).map(
      (tema) => getSingoliArgomentiDiUnTema(tema)
    )

    function homeWrapper(description, element) {
      return (
        <div className="text-center"
          style={{
            marginTop: "5em"
          }}>
          <div>{description}</div>
          {element}
        </div>
      )
    }
    return (
      <div
        className="home-container"
        style={{
          backgroundColor: lightBaseTheme.palette.accent3Color,
          color: lightBaseTheme.palette.alternateTextColor
        }}>
        <div className="hero text-center">
          <h1 id="Spiegami" className="spiegami">Spiegami</h1>
          <h3>il Referendum Costituzionale <br/> del 4 dicembre 2016</h3>
          <RaisedButton
            secondary
            style={{minWidth: "50vw", height: "calc(24px + 3vw)", marginTop: "5em", marginBottom: "5em"}}
            buttonStyle={{minWidth: "50vw", height: "calc(24px + 3vw)"}}
            overlayStyle={{minWidth: "50vw", height: "calc(24px + 3vw)", lineHeight: "calc(24px + 3vw)"}}
            labelStyle={{fontSize: "calc(12px + 2vw)"}}
            label="Va bene, spiegami tutto"
            containerElement={<Link to={`/referendum/${Object.keys(argomenti)[0]}/${argomenti[Object.keys(argomenti)[0]][0]}`} />}
          />
        </div>
        <div className="text-center fb-share"><FacebookShare/></div>
        {homeWrapper("Oppure, vai a uno dei temi", getTemi(argomenti))}
        {homeWrapper("Oppure, vai direttamente a un argomento", getArgomenti)}
    	</div>
    )
  }
}