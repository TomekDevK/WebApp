// dependencies
import React ,{Component} from 'react'
import axios from 'axios'
import $ from 'jquery'

class Quest extends Component {
    constructor () {
        super ()
        this.state = {
            formStep: 1,
            questionNumber: 1,
            answers: []
        }
    }
    
    nextQuestionHandler = () => {
        const answers = this.state.answers
        let questionNumber = this.state.questionNumber
        let formStep = this.state.formStep

        if($('input[name='+questionNumber+']').attr('type') === 'radio'){
            answers[Number(questionNumber)-1] = $('input[name='+questionNumber+']:checked').val()
        }
        if($('input[name='+questionNumber+']').attr('type') === 'range') {
            answers[Number(questionNumber)-1] = $('input[name='+questionNumber+']').val()
        }
        if($('select[name='+questionNumber+']').length) {
            answers[Number(questionNumber)-1] = $('select[name='+questionNumber+']').val()
        }
        
        //console.log(answers[Number(questionNumber)-1])

        if(typeof answers[Number(questionNumber)-1] === 'undefined'){
            alert('Zaznacz odpowiedź')
        }else {
            if(this.state.answers[9] === document.getElementById('q10a1').value && (Number(questionNumber)===10)) {
               questionNumber=17
            }else {
               questionNumber++
            }
            if((this.state.answers[22] === document.getElementById('q23a2').value && (Number(questionNumber)===23)) || Number(answers[1])>2000 || Number(answers[1])<1988 ) {
                questionNumber = 27
            }
            if(!(Number(questionNumber)<27)) {
                formStep = 3
                questionNumber = 0
            }
        }
        
        
        $(function(){
            $('.question-container').hide()
            $(".question-container:nth-child("+ questionNumber +")").show()
        })

        this.setState({
            answers: answers,
            questionNumber: questionNumber,
            formStep: formStep
        })
        
    }

    prevQuestionHandler = () => {
        let questionNumber = this.state.questionNumber

        if(this.state.answers[9] === document.getElementById('q10a1').value) {
            questionNumber=10
        }else {
            questionNumber--
        }

        if(questionNumber<1)
        questionNumber = 1
        $(function(){
            $('.question-container').hide()
            $(".question-container:nth-child("+ questionNumber +")").show()
        })
        this.setState({
            questionNumber: questionNumber
        })
    }

    nextFormHandler = () => {

        let formStep = this.state.formStep
        let answers = this.state.answers
        const questionNumber = this.state.questionNumber

        if( formStep === 1) {
            formStep = 2
        }else {
            formStep = 1
        }

        $(function(){
            $(".question-container:nth-child("+ questionNumber +")").show()
            $('input[type=range]').attr('value','0')
        })

        this.setState({
            formStep: formStep,
            answers: answers
        })
    }

    backFormHandler = () => {
        let questionNumber = this.state.questionNumber
        let formStep = this.state.formStep
        questionNumber = 0
        if( formStep === 2) {
            formStep = 1
        }else {
            formStep = 2
        }

        this.setState({
            formStep: formStep,
            questionNumber: questionNumber
        })
    }

    updateSlider = (e) => {
        let answers = this.state.answers

        document.getElementById('sliderq'+e.target.name).innerHTML = e.target.value
        answers[Number(e.target.name)-1] =  e.target.value

        this.setState({
            answers: answers
        })
    }

    valueChangeHandler = (e) => {
        let answers = this.state.answers
        var temp = e.target.id.indexOf('inne')
        var temp1 = e.target.id.slice(0,temp)

        $('#'+temp1).attr('value',e.target.value)        
        answers[Number(e.target.name)-1] = e.target.value

        this.setState({
            answers: answers
        })
    }

    sendDate = () => {
        const answers = this.state.answers
        console.log(answers)
        $.ajax({
            type: "POST",
            url: 'http://student.agh.edu.pl/~kista//api.php',
            data: {
                answers
            }
        })
        .done(function() {
            alert( "second success" );
        })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            alert( "finished" );
        });
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
                            <input type='radio' id='q1a2' name='1' value='female' />
                            <label >Kobieta</label>
                            <input type='radio' id='q1a1' name='1' value='male' />
                            <label >Mężczyzna</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>2. Rok urodzenia :</p>
                        <div className='first-step-input'>
                            <input type='range' id='q2a1' name='2' min='1950' max='2018' step='1' onChange={this.updateSlider} />
                            <span id='sliderq2'>1950</span>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>3. Skąd Pan/-i pochodzi?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q3a1' name='3' value='countryside' />
                            <label >Wieś</label>
                            <input type='radio' id='q3a2' name='3' value='smallcity' />
                            <label >Małe miasto (do 50 tys. mieszkańców)</label>
                            <input type='radio' id='q3a2' name='3' value='bigcity' />
                            <label >Duże miasto (powyżej 50 tys. mieszkańców)</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>4. Czy pochodzi Pan/-i z rodziny wielodzietnej? (rodzina, która posiada minimum troje dzieci)</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q4a1' name='4' value='yes' />
                            <label >Tak</label>
                            <input type='radio' id='q4a2' name='4' value='no' />
                            <label >Nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>5. Czy studiuje Pan/-i</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q5a1' name='5' value='yes' />
                            <label >tak</label>
                            <input type='radio' id='q5a2' name='5' value='no' />
                            <label >nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>6. Czy mieszka i studiuje Pan/-i w rodzinnym mieście?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q6a1' name='6' value='yes' />
                            <label >Tak</label>
                            <input type='radio' id='q6a2' name='6' value='no' />
                            <label >Nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>7.Tryb obecnych studiów:</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q7a1' name='7' value='fulltimestudies' />
                            <label >Stacjonarne</label>
                            <input type='radio' id='q7a2' name='7' value='parttimestudies' />
                            <label >Niestacjonarne</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>8. Etap studiów:</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q8a1' name='8' value='licencjat' />
                            <label >Licencjackie</label>
                            <input type='radio' id='q8a2' name='8' value='inzynier' />
                            <label >Inżynierskie</label>
                            <input type='radio' id='q8a3' name='8' value='jednomagister' />
                            <label >Jednolite magisterskie</label>
                            <input type='radio' id='q8a4' name='8' value='uzupmagister' />
                            <label >Uzupełniające magisterskie</label>
                            <input type='radio' id='q8a5' name='8' value='doktor' />
                            <label >Doktoranckie</label>
                            <input type='radio' id='q8a6' name='8' value='podyplomowe' />
                            <label >Podyplomowe</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>9. Charakter studiów:</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q9a1' name='9' value='tech' />
                            <label >Techniczne</label>
                            <input type='radio' id='q9a2' name='9' value='biol' />
                            <label >Biologiczno-przyrodnicze</label>
                            <input type='radio' id='q9a3' name='9' value='human' />
                            <label >Humanistyczne</label>
                            <input type='radio' id='q9a4' name='9' value='eko' />
                            <label >Ekonomiczne</label>
                            <input type='radio' id='q9a5' name='9' value='pedag' />
                            <label >Pedagogiczne</label>
                            <input type='radio' id='q9a6' name='9' value='tursport' />
                            <label >Turystyczno-sportowe</label>
                            <input type='radio' id='q9a7' name='9' value='art' />
                            <label >Artystyczne</label>
                            <input type='radio' id='q9a8' name='9' /><input type="text" name='9' id='q9a8inne' placeholder='Inne' onChange={this.valueChangeHandler}/>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>10. Czy podjął/-ęła Pan/-i pracę zarobkową w czasie studiów?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q10a1' name='10' value='no' />
                            <label >Nie</label>
                            <input type='radio' id='q10a2' name='10' value='yes1' />
                            <label >Tak, ale tylko okazjonalne zlecena (do 19h w tygodniu)</label>
                            <input type='radio' id='q10a3' name='10' value='yes2' />
                            <label >20 - 40 godzin tygodniowo</label>
                            <input type='radio' id='q10a4' name='10' value='yes3' />
                            <label >Tak, ok. 40 godzin tygodniowo, ale nie pełny etat</label>
                            <input type='radio' id='q10a5' name='10' value='yes4' />
                            <label >Tak, na pełny etat</label>
                            <input type='radio' id='q10a6' name='10' value='yes5' />
                            <label >Tak, ale wyłącznie pracę sezonową</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>11. Czy Pana/-i obecna praca jest związana z kierunkiem studiów?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q11a1' name='11' value='yes' />
                            <label >tak</label>
                            <input type='radio' id='q11a2' name='11' value='no' />
                            <label >nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>12. Czy jest to Pana/-i pierwsza praca?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q12a1' name='12' value='yes' />
                            <label >tak</label>
                            <input type='radio' id='q12a2' name='12' value='no' />
                            <label >nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>13. Na którym roku studiów podjął/-ęła Pan/-i swoją pierwszą pracę? </p>
                        <div className='first-step-input'>
                            <select id='q13a1' name="13">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>14. Czy studiuje i pracuje Pan/-i w tym samym mieście? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q14a1' name='14' value='yes' />
                            <label >Tak</label>
                            <input type='radio' id='q14a2' name='14' value='no' />
                            <label >Nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>15. Jaki jest motyw podjęcia pracy? </p>
                        <div className='first-step-input'>
                            <input type='radio' id='q15a1' name='15' value='nofamilysupport' />
                            <label >Brak wsparcia finansowego ze strony rodziny</label>
                            <input type='radio' id='q15a2' name='15' value='notenoughsupport' />
                            <label >Niewystarczające wsparcie finansowe</label>
                            <input type='radio' id='q15a3' name='15' value='savedesire' />
                            <label >Chęć zaoszczędzenia pieniędzy</label>
                            <input type='radio' id='q15a4' name='15' value='independent' />
                            <label >Chęć uniezależnienia się</label>
                            <input type='radio' id='q15a5' name='15' value='experience' />
                            <label >Chęć zdobycia doświadczenia zawodowego</label>
                            <input type='radio' id='q15a6' name='15' /><input type="text" name='15' id='q15a6inne' placeholder='Inne' onChange={this.valueChangeHandler}/>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>16.  Miesięczny dochód brutto:</p>
                        <div className='first-step-input'>
                            <input type='range' id='q16a1' name='16' min='0' max='5000' step='50' onChange={this.updateSlider} />
                            <span id='sliderq16'>0</span>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>17. Czy posiada Pan/-i inne źródła finansowania?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q17a1' name='17' value='parents' />
                            <label >Tak, rodzice</label>
                            <input type='radio' id='q17a2' name='17' value='schoolarship' />
                            <label >Tak, stypendium</label>
                            <input type='radio' id='q17a3' name='17' value='pension' />
                            <label >Tak, renta inwalidzka</label>
                            <input type='radio' id='q17a4' name='17' value='maintenance' />
                            <label >Tak, alimenty</label>
                            <input type='radio' id='q17a5' name='17' /><input type="text" name='17' id='q17a5inne' placeholder='Tak, inne' onChange={this.valueChangeHandler}/>
                            <input type='radio' id='q17a6' name='17' value='no' />
                            <label >Nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>18. Miesięczny sumaryczny przychód z innych źródeł finansowania (poza pracą zarobkową):</p>
                        <div className='first-step-input'>
                            <input type='range' id='q18a1' name='18' min='0' max='2000' step='50' onChange={this.updateSlider} />
                            <span id='sliderq18'>0</span>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>19. Koszty utrzymania w skali miesiąca:</p>
                        <div className='first-step-input'>
                            <input type='range' id='q19a1' name='19' min='0' max='2000' step='50' onChange={this.updateSlider} />
                            <span id='sliderq19'>0</span>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>20. Przedział środków przeznaczanych na przeżycie tygodnia?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q20a1' name='20' value='les100' />
                            <label >poniżej 100 zł</label>
                            <input type='radio' id='q20a2' name='20' value='100-200' />
                            <label >100 - 200 zł</label>
                            <input type='radio' id='q20a3' name='20' value='200-300' />
                            <label >200 - 300 zł</label>
                            <input type='radio' id='q20a4' name='20' value='300-400' />
                            <label >300 - 400 zł</label>
                            <input type='radio' id='q20a5' name='20' value='more400' />
                            <label >powyżej 400 zł</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>21. Na co wydaje Pan/-i najwięcej pieniędzy?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q21a1' name='21' value='food' />
                            <label >Jedzenie</label>
                            <input type='radio' id='q21a2' name='21' value='hobby' />
                            <label >Rozrywka, hobby</label>
                            <input type='radio' id='q21a3' name='21' value='shopping' />
                            <label >Zakupy (inne niż żywieniowe)</label>
                            <input type='radio' id='q21a4' name='21' value='clothes' />
                            <label >Ubrania</label>
                            <input type='radio' id='q21a5' name='21' value='cleancosmet' />
                            <label >Środki czystości,kosmetyki</label>
                            <input type='radio' id='q21a6' name='21' /><input type="text" name='21' id='q21a6inne' placeholder='Tak, inne' onChange={this.valueChangeHandler}/>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>22. Czy jest Pan/-i w stanie zmniejszyć wydatki związane z którąś z poniższych kategorii?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q22a1' name='22' value='house' />
                            <label >Bieżące wydatki związane z mieszkaniem (poza czynszem)</label>
                            <input type='radio' id='q22a2' name='22' value='food' />
                            <label >Jedzenie</label>
                            <input type='radio' id='q22a3' name='22' value='hobby' />
                            <label >Rozrywka, hobby</label>
                            <input type='radio' id='q22a4' name='22' value='shopping' />
                            <label >Zakupy (inne niż żywieniowe)</label>
                            <input type='radio' id='q22a5' name='22' value='clothes' />
                            <label >Ubrania</label>
                            <input type='radio' id='q22a6' name='22' value='cleancosmet' />
                            <label >Środki czystości,kosmetyki</label>
                            <input type='radio' id='q22a7' name='22' /><input type="text" name='22' id='q22a7inne' placeholder='Tak, inne' onChange={this.valueChangeHandler}/>
                            <input type='radio' id='q22a8' name='22' value='no' />
                            <label >Raczej nie jestem w stanie zmniejszyć wydatków</label>
                       </div>
                    </div>
                    <div className='question-container'>
                        <p>23. Czy zarabia Pan/-i tyle, że jest w stanie odkładać pieniądze na określony cel?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q23a1' name='23' value='yes' />
                            <label >Tak</label>
                            <input type='radio' id='q23a2' name='23' value='no' />
                            <label >Nie</label>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>24. Jaką kwotę miesięcznie?</p>
                        <div className='first-step-input'>
                        <input type='radio' id='q24a1' name='24' /><input type="text" name='24' id='q24a1inne' placeholder='Proszę podać kwotę' onChange={this.valueChangeHandler}/>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>25. W jakiej formie?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q25a1' name='25' value='lokata' />
                            <label >Lokata</label>
                            <input type='radio' id='q25a2' name='25' value='kontooszczed' />
                            <label >Konto oszczędnościowe</label>
                            <input type='radio' id='q25a3' name='25' value='skarpeta' />
                            <label >Skarpeta</label>
                            <input type='radio' id='q25a4' name='25' /><input type="text" name='25' id='q25a4inne' placeholder='Inne' onChange={this.valueChangeHandler}/>
                        </div>
                    </div>
                    <div className='question-container'>
                        <p>26. Na jaki cel Pan/-i oszczędza?</p>
                        <div className='first-step-input'>
                            <input type='radio' id='q26a1' name='26' value='travel' />
                            <label >Podróże</label>
                            <input type='radio' id='q26a2' name='26' value='inwest' />
                            <label >Inwestycja (np. kupno mieszkania, samochodu, rozwój firmy)</label>
                            <input type='radio' id='q26a3' name='26' value='school' />
                            <label >Dalsze kształcenie</label>
                            <input type='radio' id='q26a4' name='26' value='nogoal' />
                            <label >Brak sprecyzowanego celu</label>
                            <input type='radio' id='q26a5' name='26' /><input type="text" name='26' id='q26a5inne' placeholder='Inne' onChange={this.valueChangeHandler}/>
                        </div>
                    </div>
                </form>
                <button onClick={this.nextQuestionHandler}>Następne pytanie</button>
                <button onClick={this.prevQuestionHandler}>Poprzednie pytanie</button>
            </div>
        :null

        const thirdStep = formStep === 3
        ? 
            <div className='form-step' ref='thirdStep'>
                <span>
                {this.sendDate()}
                Dziękujemy za wypełnienie ankiety
                </span>
            </div>
        :null

        const backButton = formStep === 2 ? <button onClick={this.backFormHandler}>Wyjdź</button>:null

        return (
            <div className='form-container'>
                {firstStep}
                {secoundStep}
                {backButton}
                {thirdStep}
            </div>
        )
    }
}

export default Quest