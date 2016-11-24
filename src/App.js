import React, { Component } from 'react';
import Footer from './Footer.js'
import Navigation from './Navigation.js'
import MailChimp from './MailChimp.js'
import { argumentsFromTopic } from "./Theorem.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      argomenti: argumentsFromTopic(props.route.referendum)
    }
  }

  render() {
    return (
      <div>
        <Navigation argomenti={this.state.argomenti} tema={this.props.params.tema} argomento={this.props.params.argomento} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
