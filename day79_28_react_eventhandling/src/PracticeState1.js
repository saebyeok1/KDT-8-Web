import { Component } from 'react';

class PracticeState1 extends Component {
    state = {
        text: '검정색 글씨',
        color: 'black',
    };
    changeBlue = () => {
        this.setState({ text: '파란색 글씨', color: 'blue ' });
    };
    changeRed = () => {
        this.setState({ text: '빨간색 글씨', color: 'red' });
    };

    render() {
        return (
            <>
                <h1 style={{ color: this.state.color }}>{this.state.text}</h1>
                <button onClick={this.changeRed}>빨간색</button>
                <button onClick={this.changeBlue}>파란색</button>
            </>
        );
    }
}
export default PracticeState1;
