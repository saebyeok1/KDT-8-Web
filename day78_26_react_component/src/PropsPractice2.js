import { Component } from 'react';
import PropTypes from 'prop-types';

class PropsPractice2 extends Component {
    // 클래스형 컴포넌트에서는 render 함수는 필수
    render() {
        // const name = '김보영';
        // 클래스형 객체 props 구조분해할당
        const { food } = this.props;

        return (
            <>
                <div>
                    제가 좋아하는 음식은{' '}
                    <span style={{ color: 'red' }}>{food}</span> 입니다.
                </div>
            </>
        );
    }
}

PropsPractice2.defaultProps = {
    food: '샤브샤브 기본값',
};

PropsPractice2.proptype = {
    name: PropTypes.string,
};

export default PropsPractice2;
