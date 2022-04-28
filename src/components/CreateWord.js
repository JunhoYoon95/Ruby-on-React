import { useRef } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch"

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    function onSubmit(e){
        e.preventDefault();
        // 저장 버튼을 눌렀을 때에 단어와 뜻에 대한 정보를 찍어볼 것입니다. 이 input에 들갈 값들을 가져오기 위해
        // useRef 라는 훅을 사용할 것입니다
        fetch(
            // 첫번째 인자로 주소를 넣고
            `http://localhost:3001/words/`, 
            // 두번째 인자로 객체를 넣습니다. 요청의 옵션들을 입력하는 곳이죠
            {
            method : "POST",    // Create를 할 것이므로 POST
            headers : {
                'Content-type' : 'application/json' // 컨텐츠 타입은 보내는 리소스의 타입을 말합니다. 우리는 json 형태로 보낼 것이기 때문에
            },
            body : JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }),
        })
        .then(res => {
            if(res.ok) {
                alert("생성이 완료 되었습니다");
                navigate(`/day/${dayRef.current.value}`)
            }
        })
    }
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return  (
        // form 태그로 감싸져 있어서 저장시 새로고침이 될 것입니다
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터"ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}