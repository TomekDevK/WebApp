// dependencies
import React ,{Component} from 'react'
import {withRouter, Switch, Route} from 'react-router-dom'

// components
import Home from './Home'
import Quest from './Quest'
import Goal from './Goal'


class Main extends Component {
   render() {
       return(
            <div className='main'>
                <Switch>
                    <Route exact path='/' component={Home}
                     />
                    <Route exact path='/ankieta' component={Quest}
                    />
                    <Route exact path='/celankiety' component={Goal}
                     />
                </Switch>
            </div>
       )
   }
}

export default withRouter(Main)