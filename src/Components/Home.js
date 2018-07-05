// dependencies
import React ,{Component} from 'react'
import $ from 'jquery'

class Home extends Component {
    constructor () {
        super ()
        this.state = {
            lFollowX: 0,
            lFollowY: 0,
            x: 0,
            y: 0,
            friction: 1 /10
        }
    }

    componentDidMount () {
        let that = this
        $().on('mousemove click', function(e) {

            var lMouseX = Math.max(-300, Math.min(300, $(window).width() / 2 - e.clientX));
            var lMouseY = Math.max(-300, Math.min(300, $(window).height() / 2 - e.clientY));
            var lFollowX = (lMouseX) ; // 100 : 12 = lMouxeX : lFollow
            var lFollowY = (lMouseY) ;

            that.setState({
                lFollowX: lFollowX,
                lFollowY: lFollowY
            })
    
        });
    }

    componentWillUnmount(){
        $(window).off('mousemove click')

    }

    moveBackground = () => {
    let {x,y,lFollowX,lFollowY,friction} = this.state

    x += (lFollowX - x) * friction
    y += (lFollowY - y) * friction
    
    var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.bg').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(this.moveBackground);
    }

   


    render() {
        this.moveBackground()
        return (
            <div className='home'>
                <div className="wrap">
                    <div className="bg"></div>
                    <h1>Wypełnij ankietę</h1>
                </div>
            </div>
        )
    }
}

export default Home