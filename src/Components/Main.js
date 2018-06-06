// dependencies
import React ,{Component} from 'react'
import {withRouter, Switch, Route} from 'react-router-dom'

// components
import Home from './Home'
import Quest from './Quest'
import Goal from './Goal'
import Team from './Team'
import Source from './Source'


class Main extends Component {
   render() {
       return(
            <div className='main'>
                <Switch>
                    <Route exact path='/' render={propr => (
                        <Home />
                    )} />
                    <Route exact path='/ankieta' render={propr => (
                        <Quest />
                    )} />
                    <Route exact path='/celankiety' render={propr => (
                        <Goal />
                    )} />
                    <Route exact path='/zespol' render={propr => (
                        <Team />
                    )} />
                    <Route exact path='/zasoby' render={propr => (
                        <Source />
                    )} />
                </Switch>
            </div>
       )
   }
}

export default withRouter(Main)