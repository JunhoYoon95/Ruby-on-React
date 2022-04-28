import { useState } from "react"

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    function toggleShow() {
        setIsShow(!isShow)
    }
    function toggleDone() {
        setIsDone(!isDone)
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
                <button className="btn_del">삭제 </button>
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