import styled from 'styled-components';

const _BoxOne = styled.div`
    background-color: blue;
    width: 100px;
    height: 100px;
`;

// props를 이용하는 방법
const _BoxTwo = styled.div`
    background-color: ${(props) => props.color};
    width: 100px;
    height: 100px;
`;

// 상속받아서 이용하는 방법
const _CircleOne = styled(_BoxTwo)`
    /* background-color: ${(props) => props.color};
    width: 100px; */
    border-radius: 50px;
    /* height: 100px; */
`;

// 기존 태그를 이름만 바꿔서 사용하는 방법 => as 라는 키워드 ㅏㅇ7ㅇ
const _Btn = styled.button`
    background-color: blue;
    color: white;
    padding: 20px 15px;
    border-radius: 4px;
`;

// 태그 옵션 넣는 방법
const _Input = styled.input.attrs({ required: true })``;

// 중첩
const _BoxThree = styled.div`
    width: 200px;
    height: 140px;
    background-color: aqua;
    line-height: 100px;
    text-align: center;
    /* 다른 컴포넌트를 불러와서 사용할 때 */
    p {
        color: red;
        font-weight: 900;

        &:hover {
            font-size: 32px;
        }
    }
`;

export default function StyledComponent() {
    return (
        <div>
            <_BoxOne></_BoxOne>
            <_BoxTwo color="red"></_BoxTwo>
            <_CircleOne color="green"></_CircleOne>
            <_Btn as="a" href="https://www.naver.com/">
                클릭
            </_Btn>
            <_BoxThree>
                <p>Hello Styled</p>
            </_BoxThree>
        </div>
    );
}
