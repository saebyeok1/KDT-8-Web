// function 컴포넌트명
// function 컴포넌트명, const 컴포넌트명 = ()=>{}
import PropTypes from 'prop-types';

function FunctionComponent({ name, age, children }) {
    // function FunctionComponent({ props }) {
    const myClass = 'kdt8';

    return (
        <>
            <div>반갑습니다 {myClass}에 오신 것을 환영합니다</div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{children}</div>
        </>
    );
}

FunctionComponent.defaultProps = {
    name: 'kdt',
    age: 10,
};

FunctionComponent.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default FunctionComponent;
