import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Snackbar from 'material-ui/Snackbar';
import Popover from 'material-ui/Popover';

import ActionHome from 'material-ui/svg-icons/action/home';

export default class Formspree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false,
      popoverOpen: false,
      message: "",
      type: "ready_to_send",
      email: "",
      testo: "",
      canSubmit: false
    }
  }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      canSubmit: this.validateEmail(event.target.value)
    });
  }
  handleChangeTesto(event) {
    this.setState({testo: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const _this = this;
    this.setState({type: "sending", snackbarOpen: true, message: "Sending message..."});
    fetch('https://formspree.io/spiegami.tutto@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        testo: this.state.testo,
        email: this.state.email
      })
    })
    .then(
      function(response) {  
        if (response.status !== 200) {  
          console.log('Looks like there was a problem. Status Code: ' +  
            response.status);  
          return;  
        }
        _this.setState({type: "ready_to_send", message: "Message sent!"})
      }  
    )
    .catch(function(err) {  
      console.log('Fetch Error :-S', err);  
    });
  }
  handleSnackbarRequestClose() {
    this.setState({
      snackbarOpen: false,
    });
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handlePopoverRequestClose() {
    this.setState({
      popoverOpen: false,
    });
  };
  
  render() {
    return (
      <div>
      <ActionHome onTouchTap={this.handleTouchTap.bind(this)} />
      <Snackbar
        open={this.state.snackbarOpen}
        message={this.state.message}
        autoHideDuration={3000}
        onRequestClose={this.handleSnackbarRequestClose.bind(this)}
      />
      <Popover
        open={this.state.popoverOpen}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={this.handleRequestClose}
      >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField id="text" type="text" name="text" floatingLabelText="Testo" value={this.state.testo} onChange={this.handleChangeTesto.bind(this)}/>
          <TextField id="email" type="email" name="_replyto" floatingLabelText="Email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} />
          <RaisedButton type="submit" value="Send" label="Invia" name="invia" disabled={!this.state.canSubmit || this.state.type !== "ready_to_send"}/>
        </form>
      </Popover>
      </div>
    )
  }
}