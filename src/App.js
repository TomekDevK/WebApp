// dependencies
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// components
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
//styles
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />   
        <Footer />   
      </div>
    );
  }
}

export default withRouter(App);
