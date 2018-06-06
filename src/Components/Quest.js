// dependencies
import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Header extends Component {
    constructor () {
        super ()
        this.state = {
            formStep: 1,
            questionNumber: 0,
            answers: []
        }
    }
    // Selector input radio on every render in form next/back
    
    nextQuestionHandler = (e) => {
        let answers = this.state.answers
        console.log(answers)
    }

    prevQuestionHandler = (e) => {

    }

    nextFormHandler = (e) => {
        e.preventDefault()
        let formStep = this.state.formStep
        let answers = this.state.answers
        if( formStep === 1) {
            formStep = 2
        }else {
            formStep = 1
        }
        var that = this
        $(function(){
            $('input[type=radio]').click(function(){
                answers[Number(this.name)] = this.value
            })
        })
        this.setState({
            formStep: formStep,
            answers: answers
        })
    }

    backFormHandler = (e) => {
        e.preventDefault()
        let formStep = this.state.formStep
        if( formStep === 2) {
            formStep = 1
        }else {
            formStep = 2
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
                <span>
                Badanie odnośnie studenckich finansów
                Szanowna Pani / Szanowny Panie,

                proszę o poświęcenie kilku minut na wypełnienie tego kwestionariusza.
                </span>
                <button onClick={this.nextFormHandler}>Rozpocznij ankietę</button>
            </div>
        :null

        const secoundStep = formStep === 2
        ?
            <div className='form-step' ref='secoundStep'>
                <form>
                    <div className='question-container'>
                        <p>1. Płeć :</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q1a1' name='1' value='male' />
                            <label for='q1a1'>Mężczyzna</label>
                            <input type='radio' id='q1a2' name='1' value='female' />
                            <label for='q1a2'>Kobieta</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>2. Który rok studiów  :</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q2a1' name='2' value='male' />
                            <label for='q2a1'>sample</label>
                            <input type='radio' id='q2a2' name='2' value='female' />
                            <label for='q2a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>3. Stacjonarne /niestacjonarne</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q3a1' name='3' value='male' />
                            <label for='q3a1'>sample</label>
                            <input type='radio' id='q3a2' name='3' value='female' />
                            <label for='q3a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>4. Typ studiów (techniczne, biologiczno-przyrodnicze, humanistyczne, ekonomiczne, artystyczne,  pedagogiczne, turystyczno-sportowe).</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q4a1' name='4' value='male' />
                            <label for='q4a1'>sample</label>
                            <input type='radio' id='q4a2' name='4' value='female' />
                            <label for='q4a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>5. Czy pracujesz?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q5a1' name='5' value='male' />
                            <label for='q5a1'>tak</label>
                            <input type='radio' id='q5a2' name='5' value='female' />
                            <label for='q5a2'>nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>6. Jeśli tak to ile godzin w tygodniu średnio? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q6a1' name='6' value='male' />
                            <label for='q6a1'>sample</label>
                            <input type='radio' id='q6a2' name='6' value='female' />
                            <label for='q6a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>7. Czy pracujesz ze względu na brak wsparcia finansowego, czy żeby zaoszczędzić/uniezależnić się? (Nie do końca wiem jak to zgrabnie ująć ) :</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q7a1' name='7' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q7a2' name='7' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>8. Inne źródła finansowania, jakie? (rodzice, stypendium, renta inwalidzka, sponsor itp. ):</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q8a1' name='8' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q8a2' name='8' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>9. Czy pochodzisz z rodziny wielodzietnej? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q9a1' name='9' value='male' />
                            <label for='q1a1'>tak</label>
                            <input type='radio' id='q9a2' name='9' value='female' />
                            <label for='q1a2'>nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>10. Przedział środków przeznaczanych na przeżycie tygodnia/ 100, 100-200, 200-300, 300-400, 400+. (bez kosztów mieszkania) </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q10a1' name='10' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q10a2' name='10' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>11. Na co wydaje najwięcej ? Jedzenie, rozrywka, zakupy inne niż żywieniowe… </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q11a1' name='11' value='male' />
                            <label for='q1a1'>tak</label>
                            <input type='radio' id='q11a2' name='11' value='female' />
                            <label for='q1a2'>nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>12. Czy w którejś z powyższych grup jesteś w stanie mniej wydawać? W której?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q12a1' name='12' value='male' />
                            <label for='q1a1'>tak</label>
                            <input type='radio' id='q12a2' name='12' value='female' />
                            <label for='q1a2'>nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>13. Czy jesteś w stanie odkładać pieniądze? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q13a1' name='13' value='male' />
                            <label for='q1a1'>Tak</label>
                            <input type='radio' id='q13a2' name='13' value='female' />
                            <label for='q1a2'>Nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>14. Jeśli tak to ile/msc? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q14a1' name='14' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q14a2' name='14' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>15. Jeśli tak to jaka forma oszczędzania? Lokata/konto oszczędnościowe/skarpeta: </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q15a1' name='15' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q15a2' name='15' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>16.  Na jaki cel najczęściej oszczędzasz?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q16a1' name='16' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q16a2' name='16' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>17. Gdzie najczęściej szukasz oszczędności?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q17a1' name='17' value='male' />
                            <label for='q1a1'>sample</label>
                            <input type='radio' id='q17a2' name='17' value='female' />
                            <label for='q1a2'>sample</label>
                        </div>
                        <button onClick={this.backFormHandler}>Wstecz</button>
                    </div>
                </form>
                <button onClick={this.nextQuestionHandler}>Następne pytanie</button>
                <button onClick={this.prevQuestionHandler}>Poprzednie pytanie</button>
            </div>
        :null

        return (
            <div className='form-container'>
                {firstStep}
                {secoundStep}
            </div>
        )
    }
}

export default Header