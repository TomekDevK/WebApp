// dependencies
import React ,{Component} from 'react'


class Goal extends Component {
    render() {
        return (
            <div className='goal-container'>
                <div className='goal-container-helper'>
                    <p>Cele ankiety:</p>
                    <span> 
                        <ul>
                            <li>Jakie są źródła finansowania poszczególnych osób oraz które płaszczyzny życia pobierają najwięcej dochodów?</li>
                            <li>Czy da się wyżyć w Krakowie (innym dużym lub mniejszym mieście) za średnie dochody dla studentów na 2/3/4 roku bez zewnętrznego finansowania?</li>
                            <li>Gdzie można szukać oszczędności?</li>
                        </ul>
                    </span>
                </div>
            </div>
        )
    }
}

export default Goal