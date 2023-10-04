import { Component } from 'react';

class PracticeState2 extends Component {
    // 내가 작성한 코드
    // state = {
    //     text: '안녕',
    // };

    // 리더님 코드
    state = {
        visible: 'block',
    };

    deleteText = () => {
        // this.setState({ text: '' });
        this.setState((prevState) => ({ visible: 'none' }));
    };
    render() {
        return (
            <>
                <button onClick={this.deleteText}>사라져라</button>
                {/* <h1>{this.state.text}</h1> */}
                {/* 리더님 코드 */}
                <h1 style={{ display: this.state.visible }}>안녕하세요</h1>
            </>
        );
    }
}

export default PracticeState2;
