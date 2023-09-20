import { Component } from 'react';
import img from './test.png';

class Test2 extends Component {
    // 클래스형 컴포넌트에서는 render 함수는 필수
    render() {
        const style = {
            color: 'orange',
            fontSize: '40px',
            marginTop: '20px',
        };
        return (
            <>
                <div style={style}>
                    <h2>안녕하세요</h2>
                    <img src={img} style={{ width: '200px' }} alt="" />
                </div>
            </>
        );
    }
}

export default Test2;
