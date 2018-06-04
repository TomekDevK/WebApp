// dependencies
import React ,{Component} from 'react'
import {withRouter, Switch, Route} from 'react-router-dom'

// components
import Home from './Home'
import Quest from './Quest'


class Main extends Component {
   render() {
       return(
            <div className='main'>
                <Switch>
                    <Route exact path='/' render={propr => (
                        <Home />
                    )} />
                    <Route exact path='/quest' render={propr => (
                        <Quest />
                    )} />
                </Switch>
            </div>
       )
   }
}

export default withRouter(Main)