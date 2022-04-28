import { useState } from "react"

export default function Word({ word : w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    function toggleShow() {
        setIsShow(!isShow)
    }
    function toggleDone() {
        // setIsDone(!isDone)
        fetch(
            // 첫번째 인자로 주소를 넣고
            `http://localhost:3001/words/${word.id}`, 
            // 두번째 인자로 객체를 넣습니다. 요청의 옵션들을 입력하는 곳이죠
            {
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
                // 컨텐츠 타입은 보내는 리소스의 타입을 말합니다. 우리는 json 형태로 보낼 것이기 때문에
            },
            body : JSON.stringify({
                // 단순히 가져오는 GET 과는 다르게 PUT(update)은 수정해야 할 내용들을 담아서 보내야겠지요.
                // 그걸 body 에 넣어서 보내요
                ...word,    // 기존의 word에 isDone 을 넣어서 보내면 되죠
                isDone : !isDone // 바꿀 것이니까
            }),
        })
        .then(res => {
            if(res.ok) {
                setIsDone(!isDone)
            }
        })
    }

    function del() {
        if(window.confirm('삭제하시겠습니까')){
            fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'DELETE'
        }).then(res => {
            // API 호출이 잘 되었고 삭제가 잘 되었으면
            if(res.ok){
                setWord({ id : 0})  // word의 id 를 0으로 바꾸어 주겠습니다
            }
        })
        }
    }

    if(word.id === 0){
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng} </td>
            <td>{isShow && word.kor} </td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기 ' : '보기'} </button>
                <button className="btn_del" onClick={del}>삭제 </button>
            </td>
        </tr>
    )
    // npm install -g json-server 을 통해 여기서 더미 데이터로 확인을 해볼 수 있는 json 서버를 설치를 했고
    // json-server --watch ./src/db/data.json --port 3001 을 통해서 3000번은 지금 react 띄우고 있으니, 3001번에다가 json-server db연결을 시켜 띄운다.
    // http://localhost:3001/words?day=1 이렇게 하면 1일치에 해당하는 단어들만 가져오는 형태를 띄게 되겠지

    /**
     * 
     * REST API
     * 
     * Create : POST
     * Read : GET
     * Update : PUT
     * Delete : DELETE
     * 
     */
}