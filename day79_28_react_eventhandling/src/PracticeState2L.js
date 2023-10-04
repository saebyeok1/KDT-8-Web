import { Component } from 'react';

class PracticeState2L extends Component {
    state = {
        visible: true,
    };

    deleteText = () => {
        this.setState((prevState) => ({ visible: !prevState }));
    };
    render() {
        return (
            <>
                <button onClick={this.deleteText}>
                    {this.state.visible ? '사라져라' : '보여라'}
                </button>
                <h1>{this.state.visible && '안녕하세요'}</h1>
            </>
        );
    }
}

export default PracticeState2L;
