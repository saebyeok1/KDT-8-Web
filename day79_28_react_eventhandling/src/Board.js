import { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);

        //state 초기화
        this.state = {
            inputWriter: '', //작성자
            inputTitle: '', //제목
            comments: [], //입력한 내용
            inputSearch: '', //검색 내용
            searchType: 'title', // 검색타입 , 밑에 select value 값
            results: [], // 검색 결과
        };
        //바인딩
        this.onChange = this.onChange.bind(this);
        this.addComment = this.addComment.bind(this);
        this.searchComment = this.searchComment.bind(this);
    }

    onChange(e) {
        //console.log(e.target);
        this.setState({ inputWriter: e.target.value });
    }

    addComment() {
        const newComment = {
            writer: this.state.inputWriter,
            title: this.state.inputTitle,
        };
        this.setState({
            comments: [...this.state.comments, newComment],
            inputTitle: '',
            inputWriter: '',
        });
    }
    searchComment() {
        this.state.comments.filter((value) => {
            console.log(
                value[this.state.searchType].inclues(this.state.inputSearch)
            );
            const inclue = typle.includes(this.state.inputSearch);
            if (value[this.state.searchType].inclues(this.state.inputSearch)) {
                return true;
            } else {
                return false;
            }
        });
        this.setState({ result: searchResult });
    }

    render() {
        const {
            inputWriter,
            inputTitle,
            comments,
            inputSearch,
            searchType,
            results,
        } = this.state;
        return (
            <>
                <form>
                    <label htmlFor="writer">작성자:</label>
                    {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
                    <input
                        type="text"
                        id="writer"
                        value={inputWriter}
                        onChange={(e) => this.onChange(e)}
                    />
                    <label htmlFor="title">제목:</label>
                    <input
                        type="text"
                        id="title"
                        value={inputTitle}
                        onChange={(e) =>
                            this.setState({ inputTitle: e.target.value })
                        }
                    />
                    <button type="button" onClick={this.addComment}>
                        작성
                    </button>
                </form>
                <form>
                    <select
                        value={searchType}
                        onChange={(e) => {
                            this.setState({ searchType: e.target.value });
                        }}
                    >
                        <option value="writer">작성자</option>
                        <option value="title">제목</option>
                    </select>
                    <input
                        type="text"
                        placeholder="검색어"
                        value={inputSearch}
                        onChange={(e) =>
                            this.setsate({ inputSearch: e.target.value })
                        }
                    ></input>
                    <button type="button" onClick={this.searchComment}></button>
                </form>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* [ {title, writer},{title, writer},{title, writer}... ] */}
                        {comments.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <h4>검색결과</h4>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* [ {title, writer},{title, writer},{title, writer}... ] */}
                        {comments.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Board;
