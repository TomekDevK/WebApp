// dependencies
import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

//styles
import '../styles/css/header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='quest'>
                    <Link to='/quest'>Ankieta</Link>
                </div>
                <div className='home'>
                    <Link to='/'>Strona główna</Link>
                </div>
            </div>
        )
    }
}

export default Header