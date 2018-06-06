// dependencies
import React ,{Component} from 'react'
import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='home'>
                    <Link to='/'>Strona główna</Link>
                </div>
                <div className='goal'>
                    <Link to='/celankiety'>Cel Ankiety</Link>
                </div>
                <div className='quest'>
                    <Link to='/ankieta'>Ankieta</Link>
                </div>
                <div className='team'>
                    <Link to='/zespol'>Nasz zespół</Link>
                </div>
                <div className='source'>
                    <Link to='/zasoby'>Źródła i zasoby</Link>
                </div>
            </div>
        )
    }
}

export default Header