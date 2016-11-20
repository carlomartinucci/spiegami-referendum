import React, { Component } from 'react'
//import { Link } from 'react-router'
//import { argomenti } from "./arguments.json"
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavLink from './NavLink'
import Divider from 'material-ui/Divider';


export default class Referendum extends Component {
  render() {
    // const argomenti_list = (tema) => (
    //     argomenti[tema].map((a) => (
    //         <Link to={"/referendum/" + tema + "/" + a}> {tema} - {a} </Link>
    //       )
    //     )
    //   )
    // const temi = Object.keys(argomenti).map(argomenti_list)
    const paperStyle = {
      display: 'inline-block',
      margin: '16px 0 16px 50%',
      transform: 'translateX(-50%)'
    };
    return (
      <div className="container">
        <h3 className="text-center">Si discute su</h3>
        <Paper style={paperStyle}>

        <Menu>
          <MenuItem
            containerElement={<NavLink to="/referendum/senato" />}
            key="senato"
            primaryText="Senato"
            open
          />
          <MenuItem
            containerElement={<NavLink to="/referendum/senato/ruolo_e_funzioni" />}
            key="senato/ruolo_e_funzioni"
            primaryText="Ruolo e funzioni"
            insetChildren
          />
          <MenuItem
            containerElement={<NavLink to="/referendum/senato/modalità_di_elezione" />}
            key="senato/modalità_di_elezione"
            primaryText="Modalità di elezione"
            insetChildren
          />
          <MenuItem
            containerElement={<NavLink to="/referendum/senato/il_procedimento_legislativo" />}
            key="senato/il_procedimento_legislativo"
            primaryText="Il procedimento legislativo"
            insetChildren
          />
          <MenuItem
            containerElement={<NavLink to="/referendum/senato/diritti_dei_senatori_e_statuto_delle_minoranze" />}
            key="senato/diritti_dei_senatori_e_statuto_delle_minoranze"
            primaryText="I diritti dei senatori"
            insetChildren
          />
          <Divider />
          <MenuItem
            containerElement={<NavLink to="/referendum/stato-regioni" />}
            key="stato-regioni"
            primaryText="Rapporto Stato - Regioni"
            open
          />
          <MenuItem
            containerElement={<NavLink to="/referendum/stato-regioni/il_procedimento_legislativo" />}
            key="stato-regioni/il_procedimento_legislativo"
            primaryText="Il procedimento legislativo"
            insetChildren
          />
          <Divider />
          <MenuItem
            containerElement={<NavLink to="/referendum/altro" />}
            key="altro"
            primaryText="Altre questioni"
          />
          <MenuItem
            containerElement={<NavLink to="/referendum/altro/formulazione_e_discussione_dei_decreti_legge" />}
            key="altro/decreti_legge"
            primaryText="Decreti legge"
            insetChildren
          />
          <MenuItem
            containerElement={<NavLink to="/referendum/altro/garanzie" />}
            key="altro/garanzie"
            primaryText="Garanzie"
            insetChildren
          />
          <Divider />
          <MenuItem
            key="politiche"
            disabled
            primaryText="Questioni politiche"
          />
        </Menu>

        </Paper>


      </div>
    )
  }
}