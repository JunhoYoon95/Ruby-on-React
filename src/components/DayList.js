import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function DayList(){
    const [days, setDays] = useState([]); // days 라는 state  를 만든다. 
    //처음에는 빈 배열로 만든다. 이후 API 에서 리스트를 가져와서 바꿔주는 방식을 선택하도록 하겠다. 그러면 데이터가 바뀌면 자동으로 렌더링이 될 것이다.

    useEffect(() => {
        // API 이용합니다
        fetch('http://localhost:3001/days') // 이렇게 하면 promise가 반환이 됩니다
        .then(res => {
            return res.json()   // response는 http응답이고 실제 json 이 아니므로 json으로 변환하여 promise를 반환
        })
        .then(data => {
            setDays(data)
        })
    }, []) // 이렇게 count를 따로 넣으면 count에 변화가 있을 때 마다 하는 것이 되는 것인 의존성 배열.

    return (
        <ul className='list_day'>
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}