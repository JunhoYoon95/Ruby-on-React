import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch"

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    function addDay() {
        fetch(`http://localhost:3001/days/`, {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                // id 는 POST 시 자동으로 생성됨
                day : days.length + 1
            })
        }).then(res => {
            if(res.ok) {
                alert("날짜가 생성됨");
                navigate(`/`)  // 홈으로 넘김
            }
        })
    }
    return <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
    </div>
}