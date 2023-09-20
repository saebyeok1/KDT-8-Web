// Class형 Component
// class 컴포넌트명 extends Component{}

// 2번방법
// import React from 'react';
// class ClassComponent extends React.Component {} // 2번방법

// 1번 방법
import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    // 클래스형 컴포넌트에서는 render 함수는 필수
    render() {
        // const name = '김보영';
        // 클래스형 객체 props 구조분해할당
        const { name } = this.props;
        return (
            <>
                <h1>Hello {name}</h1>
                <p>여기는 클래스형 컴포넌트</p>
                <h4>{name}</h4>
            </>
        );
    }
}

ClassComponent.defaultProps = {
    name: '홍길동',
};

ClassComponent.proptype = {
    name: PropTypes.string,
};

export default ClassComponent;
