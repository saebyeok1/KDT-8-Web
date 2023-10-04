import { Component } from 'react';

class CounterState extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         number: 0,
    //     };

    //     // 바인딩
    //     // 바인딩을 해줘야 this가 여기를 참조하게 됨
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement() {
    //     // 이런식으로 작성하면 안됨
    //     // rendering시는 setState를 이용해서 만들어야함
    //     // this.statme.number++;

    //     // 1씩 증가하면서 render함수가 재 rendering 되는 것임
    //     this.setState({ number: this.state.number + 1 });
    // }

    // 화살표함수 사용시에는 그냥 state라고 사용할 수 있음
    state = {
        number: 0,
    };

    handleDecrement = () => {
        // setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
        // 리액트는 여러 setState 호출을 일괄 처리
        // 2의 setState가 1의 setState의 결과를 기반으로 동작하지 않는다.
        // this.setState({ number: this.state.number - 1 }); -- 1
        // this.setState({ number: this.state.number - 1 }); -- 2
        // 함수형 형태로 작성하는게 보안적으로도 좋음
        this.setState((prevState) => {
            return { number: prevState.number - 1 };
        });
        this.setState((prevState) => ({ number: prevState.number - 1 }));
    };

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleIncrement}>증가</button>
                <button onClick={this.handleDecrement}>감소</button>
            </div>
        );
    }
}

export default CounterState;
