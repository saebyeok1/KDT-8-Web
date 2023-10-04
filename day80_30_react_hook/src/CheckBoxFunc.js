import { useState } from 'react';

export default function CheckBoxFunc() {
    const [todos, setTodos] = useState([]); // 할 일 목록
    const [inputTodo, setInputTodo] = useState(''); //input에 입력할 값

    const addTodo = () => {
        if (todos.length > 9) {
            alert('할 일이 너무 많아요!');
        }
        // inputTodo가 빈 값일 때 추가되지 않게 하기
        if (inputTodo !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputTodo,
                checked: false,
            };
            setTodos([...todos, newTodo]);
            // input 값을 비우기 위해서
            setInputTodo('');
        }
    };

    const toggleTodo = (id) => {
        // console.log(id);
        setTodos(
            todos.map((todo) => {
                // console.log(todo);
                return todo.id == id
                    ? { ...todo, checked: !todo.checked }
                    : todo;
            })
        );
    };

    const RemoveTodo = () => {
        setTodos(todos.filter((todo) => todo.checked === false));
    };
    return (
        <>
            <input
                type="text"
                value={inputTodo}
                onChange={(e) => setInputTodo(e.target.value)}
                placeholder="할 일 입력..."
            />
            <button onClick={addTodo}>추가</button>
            <ul>
                {todos.map((todo) => {
                    console.log(todo);
                    return (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.chekcked}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            {todo.text}
                        </li>
                    );
                })}
            </ul>
            <button onClick={RemoveTodo}>완료된 할 일 삭제</button>
        </>
    );
}
