import { Component } from 'react';

class PracticeState3 extends Component {
    constructor(props) {
        super(props); // 부모 클래스인 Component의 생성자 호출

        // state 초기화
        this.state = {
            inputWriter: '', // 작성자
            inputTitle: '', // 제목
            comments: [], // 입력한 내용
        };
        // 바인딩
        this.onChange = this.onChange.bind(this);
        this.addComment = this.addComment.bind(this);

        // this.write = this.write.bind(this);
    }
    onChange(e) {
        console.log(e.target);
        this.setState({ inputWriter: e.target.value });
    }
    addComment() {
        const newComments = {
            writer: this.state.inputWriter,
            title: this.state.inputTitle,
        };
        this.setState({ comments: [...this.state.comments, newComments] });
    }

    render() {
        const { inputWriter, inputTitle, comments } = this.state;
        return (
            <>
                <form>
                    <fieldset>
                        <label htmlFor="writer">작성자: </label>
                        {/* onChange: input, textarea, select값이 변경될 때마다  발생하는 이벤트 핸들러 */}
                        <input
                            type="text"
                            id="writer"
                            value={inputWriter}
                            onChange={(e) => this.onChange(e)}
                        />
                        <label htmlFor="title">제목: </label>
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
                    </fieldset>
                </form>
                <select>
                    <option value="">작성자</option>
                </select>
                <input type="text" placeholder="검색어" />
                <button>검색</button>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* [{title,writer},{},{}] */}
                        {comments.map((value, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.title}</td>
                                        <td>{value.writer}</td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default PracticeState3;
