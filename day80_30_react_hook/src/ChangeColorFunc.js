import { useState } from 'react';

export default function ChangeColorFunc() {
    // const [status, setStatus] = useState({ text: '검정색', color: 'black' });

    // const changeBlue = () => {
    //     setStatus({ text: '파란색', color: 'blue' });
    // };
    // const changeRed = () => {
    //     setStatus({ text: '빨간색', color: 'red' });
    // };
    // return (
    //     <div>
    //         <h1 style={{ color: status.color }}>{status.text} 글씨</h1>
    //         <button onClick={changeBlue}>파란색</button>
    //         <button onClick={changeRed}>빨간색</button>
    //     </div>
    // );

    const [text, setText] = useState('검정');
    const [color, setColor] = useState('black');

    const changeBlue = () => {
        setText('파란');
        setColor('blue');
    };
    const changeRed = () => {
        setText('빨간');
        setColor('red');
    };
    return (
        <div>
            <h1 style={{ color }}>{text}색 글씨</h1>
            <button onClick={changeBlue}>파란색</button>
            <button onClick={changeRed}>빨간색</button>
        </div>
    );
}
