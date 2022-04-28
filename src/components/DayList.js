import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function DayList(){
    const [days, setDays] = useState([]); // days 라는 state  를 만든다. 
    //처음에는 빈 배열로 만든다. 이후 API 에서 리스트를 가져와서 바꿔주는 방식을 선택하도록 하겠다. 그러면 데이터가 바뀌면 자동으로 렌더링이 될 것이다.
    const [count, setCount] = useState(0);

    function onClick() {
        setCount(count+1);
    }
    function onClick2() {
        setDays([
            ...days,
            {
                id : Math.random(),
                day: 1
            }
        ])
    }

    useEffect(() => {
        console.log("Count change"); // 랜더링 결과가 돔에 반영된 직후에 찍힙니다.
    }, [count]) // 이렇게 count를 따로 넣으면 count에 변화가 있을 때 마다 하는 것이 되는 것인 의존성 배열.

    return (
        <>
        <ul className='list_day'>
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    {/* 여기서 day.day는 data.json에서 days 안의 day 값을 말하는 것임 */}
                </li>
            ))}
        </ul>
        <button onClick={onClick}>{count}</button>
        <button onClick={onClick2}>Day change</button>
        </>
    );
}