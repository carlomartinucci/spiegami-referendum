import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App.js';
import Home from './Home.js'
import Referendum from './Referendum.js'
import Tema from './Tema.js'
import About from './About.js'
import Argomento from './Argomento.js'

import { referendum } from './theorems.json'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
	  <Router history={hashHistory}>
      <Route path="/" component={App}>
      	<IndexRedirect to="/home" />
      	<Route path="/home" referendum={referendum} component={Home} />
      	<Route path="/referendum" referendum={referendum} component={Referendum} />
      	<Route path="/referendum/:tema" referendum={referendum} component={Tema} />
      	<Route path="/referendum/:tema/:argomento" referendum={referendum} component={Argomento} />
		    <Route path="/about" component={About} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
