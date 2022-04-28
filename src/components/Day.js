import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
export default function Day() {
    // const day = useParams().day;  이렇게 해도 무방하니까 안헷갈리게 이렇게 하는게 좋을 듯 싶은디
    const { day }  = useParams();

    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    
    return <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {words.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>
}