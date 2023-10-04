import { useState } from 'react';

export default function ButtonToggleFunc() {
    // const [status, setStatus] = useState({ visible: true });
    // const deleteText = () => {
    //     setStatus({ visible: false });
    // };
    // return (
    // <div>
    //     <button onClick={deleteText}>
    //         {status.visible ? '사라져라' : '보여라'}
    //     </button>
    //     <h1>{status.visible && '안녕하세요'}</h1>
    // </div>
    // );
    const [visible, setVisible] = useState(true);
    const deleteText = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <button onClick={deleteText}>
                {visible ? '사라져라' : '보여라'}
            </button>
            <h1>{visible && '안녕하세요'}</h1>
        </div>
    );
}
