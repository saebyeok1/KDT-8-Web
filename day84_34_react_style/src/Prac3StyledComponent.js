import styled from 'styled-components';
import { useState } from 'react';

const _Btn = styled.button`
    background-color: ${(props) => (props.isClicked ? 'red' : 'blue')};
    color: ${(props) => (props.isClicked ? 'black' : 'white')};
    padding: 20px 15px;
    border-radius: 4px;
    cursor: pointer;
`;

export default function Prac3StyledComponent() {
    const [isClicked, setisClicked] = useState(false);

    const onClick = () => {
        setisClicked(!isClicked);
    };
    return (
        <div>
            <_Btn onClick={onClick} isClicked={isClicked}>
                색상변경!
            </_Btn>
        </div>
    );
}
