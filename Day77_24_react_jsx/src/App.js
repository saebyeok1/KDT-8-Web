import './App.css';
function App() {
    // jsx 요소에 반드시 부모요소가 필요!
    // 수업코드
    // const flag = true;
    // let txt = 'true';
    // if (flag) {
    //     txt = 'true';
    // } else {
    //     txt = 'false';
    // }

    // 실습2. jsx연습
    // const animal = '강아지';
    // const name = '감자';

    // 실습3. jsx연습
    // const title = 'hello world';

    const list = ['k', 'd', 't'];

    const users = [
        { id: 1, name: 'John', age: 25, vip: true },
        { id: 2, name: 'Jane', age: 19, vip: false },
        { id: 3, name: 'Alice', age: 30, vip: true },
        { id: 4, name: 'Bob', age: 18, vip: false },
        { id: 5, name: 'Charlie', age: 15, vip: true },
    ];

    // 1. 필터 > vip용 배열만들기
    const vipUsers = users.filter((value) => {
        return value.vip === true;
    });
    console.log(vipUsers);

    return (
        // 수업 코드
        // <>
        //     <h1 style={{ backgroudColor: 'black', color: 'white' }}>hello</h1>
        //     <div>{flag ? <h1>tr임</h1> : <h1>false입니다</h1>}</div>
        //     <div>{txt}</div>
        // </>

        // 실습1. jsx연습
        // <div>
        //     이것은 div입니다.
        //     <h3>이것은 div안에 있는 h3태그입니다</h3>
        //     <div>
        //         {3 + 5 == 8 ? <div>정답입니다!</div> : <div>오답입니다!</div>}
        //     </div>
        // </div>

        // 실습2. jsx 연습
        // <>
        //     <h2>제 반려동물의 이름은 <u>{name}</u>입니다</h2>
        //     <h2>
        //         <u>{name}</u>은 <u>{animal}</u>입니다
        //     </h2>
        // </>

        // 실습3. jsx 연습
        // <>
        //     <div className="test>{title}</div>
        //<div>
        //     <div className="input">
        //         아이디:
        //         <input type="text" />
        //     </div>
        //     <br />
        //     <div className="input">
        //         비밀번호:
        //         <input type="text" />
        // </div>
        //     </div>
        // </>

        // 실습4. jsx연습
        // <>
        //     <div style={{ display: 'flex' }}>
        //         <div className="red"></div>
        //         <div className="orange"></div>
        //         <div className="yellow"></div>
        //         <div className="green"></div>
        //         <div cla`ssName="blue"></div>
        //         <div className="navy"></div>
        //         <div className="purple"></div>
        //     </div>
        // </>

        // map, filter 수업 코드
        // <>
        //     {list.map((value, index) => {
        //         return <div key={index}>{value}</div>;
        //     })}
        // </>

        // return이 있을 경우 {}중괄호가 필요함
        <>
            {vipUsers.map((value) => (
                <li key={value.id}>{value.name}</li>
            ))}
        </>
    );
}

export default App;
