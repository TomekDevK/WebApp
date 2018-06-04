// dependencies
import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
//styles
import '../styles/css/quest.css'

class Header extends Component {
    constructor () {
        super ()
        this.state = {
            formStep: 1,
            q1: 'tak',
            q2: 0,
            q3: 0,
            q4: 0,
            q5: 0,
            q6: 0,
            q7: 0,
            q8: 0,
            q9: 0,
            q10: 0,
            q11: 0,
            q12: 0,
            q13: 0,
            q14: 0,
            q15: 0,
            q16: 0,
            q17: 0 
        }
    }
    // Selector input radio on every render in form next/back
    componentDidMount () {
        console.log(this.state.q1)
        var that = this
        $('input[type=radio]').click(function(){
            switch(this.name){
                case 'q1':
                    console.log(this.value)
                    that.setState({q1: this.value})
                    break;
                case 'q2':
                    console.log(this.value)
                    that.setState({q2: this.value})
                    break;
                case 'q3':
                    console.log(this.value)
                    that.setState({q3: this.value})
                    break;
                case 'q4':
                    console.log(this.value)
                    that.setState({q4: this.value})
                    break;
                case 'q5':
                    break;
                case 'q6':
                    break;
                case 'q7':
                    break;
                case 'q8':
                    break;
                case 'q9':
                    break;
                case 'q10':
                    break;
                case 'q11':
                    break;
                case 'q12':
                    break;
                case 'q13':
                    break;
                case 'q14':
                    break;
            }
        })
    }

    nextFormHandler = (e) => {
        e.preventDefault()
        console.log(this.state.q1)
        let formStep = this.state.formStep
        if( formStep === 1) {
            formStep = 2
        }else if( formStep === 2 ) {
            formStep = 3
        }else {
            formStep = 1
        }
        this.setState({
            formStep: formStep
        })
    }

    backFormHandler = (e) => {
        e.preventDefault()
        let formStep = this.state.formStep
        if( formStep === 2) {
            formStep = 1
        }else if( formStep === 3 ) {
            formStep = 2
        }else {
            formStep = 3
        }
        this.setState({
            formStep: formStep
        })
    }

    render() {

        const {formStep} = this.state

        const firstStep = formStep === 1
        ?
            <div className='form-step' ref='firstStep'>
                <form>
                    <div className='question-container'>
                        <p>1. Płeć :</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q1a1' name='q1' value='male' />
                            <label for='q1a1'>Mężczyzna</label>
                            <input type='radio' id='q1a2' name='q1' value='female' />
                            <label for='q1a2'>Kobieta</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>2. Który rok studiów  :</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q2a1' name='q2' value='male' />
                            <label for='q2a1'>sample</label>
                            <input type='radio' id='q2a2' name='q2' value='female' />
                            <label for='q2a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>3. Stacjonarne /niestacjonarne</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q3a1' name='q3' value='male' />
                            <label for='q3a1'>sample</label>
                            <input type='radio' id='q3a2' name='q3' value='female' />
                            <label for='q3a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>4. Typ studiów (techniczne, biologiczno-przyrodnicze, humanistyczne, ekonomiczne, artystyczne,  pedagogiczne, turystyczno-sportowe).</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q4a1' name='q4' value='male' />
                            <label for='q4a1'>sample</label>
                            <input type='radio' id='q4a2' name='q4' value='female' />
                            <label for='q4a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>5. Czy pracujesz?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q5a1' name='q5' value='male' />
                            <label for='q5a1'>tak</label>
                            <input type='radio' id='q5a2' name='q5' value='female' />
                            <label for='q5a2'>nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>6. Jeśli tak to ile godzin w tygodniu średnio? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q6a1' name='q6' value='male' />
                            <label for='q6a1'>sample</label>
                            <input type='radio' id='q6a2' name='q6' value='female' />
                            <label for='q6a2'>sample</label>
                        </div>
                    </div>
                </form>
                <button onClick={this.nextFormHandler}>Dalej</button>
            </div>
        :null

        const secoundStep = formStep === 2
        ?
            <div className='form-step' ref='firstStep'>
                <form>
                    <div className='question-container'>
                        <p>7. Czy pracujesz ze względu na brak wsparcia finansowego, czy żeby zaoszczędzić/uniezależnić się? (Nie do końca wiem jak to zgrabnie ująć ) :</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q7a1' name='q7' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q7a2' name='q7' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>8. Inne źródła finansowania, jakie? (rodzice, stypendium, renta inwalidzka, sponsor itp. ):</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q8a1' name='q8' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q8a2' name='q8' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>9. Czy pochodzisz z rodziny wielodzietnej? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q9a1' name='q9' value='male' />
                            <label for='q1a1'>tak</label>
                            <input type='radio' id='q9a2' name='q9' value='female' />
                            <label for='q1a2'>nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>10. Przedział środków przeznaczanych na przeżycie tygodnia/ 100, 100-200, 200-300, 300-400, 400+. (bez kosztów mieszkania) </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q10a1' name='q10' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q10a2' name='q10' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>11. Na co wydaje najwięcej ? Jedzenie, rozrywka, zakupy inne niż żywieniowe… </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q11a1' name='q11' value='male' />
                            <label for='q1a1'>tak</label>
                            <input type='radio' id='q11a2' name='q11' value='female' />
                            <label for='q1a2'>nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>12. Czy w którejś z powyższych grup jesteś w stanie mniej wydawać? W której?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q12a1' name='q12' value='male' />
                            <label for='q1a1'>tak</label>
                            <input type='radio' id='q12a2' name='q12' value='female' />
                            <label for='q1a2'>nie</label>
                        </div>
                    </div>
                </form>
                <button onClick={this.backFormHandler}>Wstecz</button>
                <button onClick={this.nextFormHandler}>Dalej</button>
            </div>
        :null

        const thirdStep = formStep === 3
        ?
            <div className='form-step' ref='firstStep'>
                <form>
                    <div className='question-container'>
                        <p>13. Czy jesteś w stanie odkładać pieniądze? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q13a1' name='q13' value='male' />
                            <label for='q1a1'>Tak</label>
                            <input type='radio' id='q13a2' name='q13' value='female' />
                            <label for='q1a2'>Nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>14. Jeśli tak to ile/msc? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q14a1' name='q14' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q14a2' name='q14' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>15. Jeśli tak to jaka forma oszczędzania? Lokata/konto oszczędnościowe/skarpeta: </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q15a1' name='q15' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q15a2' name='q15' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>16.  Na jaki cel najczęściej oszczędzasz?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q16a1' name='q16' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q16a2' name='q16' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>17. Gdzie najczęściej szukasz oszczędności?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q17a1' name='q17' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q17a2' name='q17' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                </form>
                <button onClick={this.backFormHandler}>Wstecz</button>
                <button onClick={this.sendButton}>Wyślij</button>
            </div>
        :null

        return (
            <div className='form-container'>
                {firstStep}
                {secoundStep}
                {thirdStep}
            </div>
        )
    }
}

export default Header