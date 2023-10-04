import { useState, useEffect } from 'react';
import axios from 'axios';

export default function LifePrac2() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // useEffect는 비동기 함수를 직접적으로 지원하지 않음.
        // 비동기 함수를 사용하려면 내부에 비동기 함수를 정의하고 바로 호출
        const axiosUser = async () => {
            const result = await axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/users',
            });
            console.log(result.data);
            setUsers(result.data);
            setLoading(true);
        };
        axiosUser();
    }, []);

    return (
        <div>
            {loading ? (
                <ul>
                    {users.map((user) => {
                        return (
                            <li key={users.id}>
                                {user.name} - {user.email}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div>Loading,,,</div>
            )}
        </div>
    );
}
