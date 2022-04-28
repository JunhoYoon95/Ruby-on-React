import { Link } from 'react-router-dom'
import dummy from '../db/data.json'

export default function DayList(){
    return <ul className='list_day'>
        {dummy.days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                {/* 여기서 day.day는 data.json에서 days 안의 day 값을 말하는 것임 */}
            </li>
        ))}
    </ul>
}