// dependencies
import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

//styles

class Header extends Component {


    render() {



        const firstStep = formStep === 1
        ?
            <div className='form-step' ref='firstStep'>
                <label>
                    <p></p>
                    <div className='first-step-input'>
                        <input type='radio' id='q1a1' value='' />
                        <label for='q1a1'></label>
                        <input type='radio' id='q1a2' value='' />
                        <label for='q1a2'></label>
                        <input type='radio' id='q1a3' value='' />
                        <label for='q1a3'></label>
                        <input type='radio' id='q1a4' value='' />
                        <label for='q1a4'></label>
                    </div>
                </label>
            </div>
        :null

        return (
            <div className='form-container'>
                
            </div>
        )
    }
}

export default Header