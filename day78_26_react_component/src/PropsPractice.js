import PropTypes from 'prop-types';
import img from './test.png';
import './App.css';

function PropsPractice({ title, author, price, type }) {
    return (
        <>
            <div className="wrapper">
                <div className="bestseller">이번주 베스트셀러</div>
                <img src={img} width={200} alt="" />
                <div className="title">{title}</div>
                <div className="author">저자: {author}</div>
                <div className="author">가격: {price}</div>
                <div className="author">구분: {type}</div>
            </div>
        </>
    );
}

PropsPractice.defaultProps = {
    title: '나의 하루는 4시 40분에 시작된다',
    author: '김유진',
    price: 13500,
    type: '자기계발서',
};

PropsPractice.proptype = {
    name: PropTypes.string,
};

export default PropsPractice;
