// dependencies
import React ,{Component} from 'react'
import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='home-header'>
                    <Link to='/'>Strona główna</Link>
                </div>
                <div className='goal-header'>
                    <Link to='/celankiety'>Cel Ankiety</Link>
                </div>
                <div className='quest-header'>
                    <Link to='/ankieta'>Ankieta</Link>
                </div>
                <div className='team-header'>
                    <Link to='/zespol'>Nasz zespół</Link>
                </div>
                <div className='source-header'>
                    <Link to='/zasoby'>Źródła i zasoby</Link>
                </div>
            </div>
        )
    }
}

export default Header