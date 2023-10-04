import { Component } from 'react';

class PracticeEvent extends Component {
    // constructor(props) {
    //     super(props); // 부모 클래스인 Component의 생성자 호출

    //     this.practiceEvent = this.practiceEvent.bind(this);
    // }
    // practiceEvent(str) {
    //     console.log(this);
    //     alert(str);
    // }

    // practiceEvent = (str) => {
    //     console.log('화살표함수', this);
    //     alert(str);
    // };

    practiceEvent = () => {
        console.log('화살표함수', this);
        alert(this.props.message);
    };

    render() {
        return (
            <>
                <button onClick={() => this.practiceEvent('message')}>
                    Show Message
                </button>

                <button onClick={this.practiceEvent}>Show Message</button>
            </>
        );
    }
}
export default PracticeEvent;
