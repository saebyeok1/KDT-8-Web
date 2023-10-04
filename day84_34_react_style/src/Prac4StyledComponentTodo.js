import styled from 'styled-components';
import { useState } from 'react';

const _Btn = styled.button`
    padding: 10px 15px;
    background-color: skyblue;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
`;

const _Input = styled.input`
    padding: 10px;
    margin-right: 10px;
`;

const _Container = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: center;
`;

const _List = styled.ul`
    width: 300px;
    height: 200px;
    overflow-y: scroll;
    padding: 0;
`;

const _ListItem = styled.li`
    border-bottom: 1px solid #dadada;
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;

export default function Prac4StyledComponentTodo() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    const onClick = () => {
        if (inputValue !== '') {
            setList([...list, inputValue]);
            setInputValue('');
        }
    };

    return (
        <_Container>
            <div>
                <_Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <_Btn onClick={onClick}>Add</_Btn>
            </div>
            <_List>
                {list.map((value, idx) => {
                    return <_ListItem key={idx}>{value}</_ListItem>;
                })}
            </_List>
        </_Container>
    );
}
