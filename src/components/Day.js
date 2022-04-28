import { useParams } from "react-router";
import dummy from "../db/data.json"
import Word from "./Word";
export default function Day() {
    // const day = useParams().day;  이렇게 해도 무방하니까 안헷갈리게 이렇게 하는게 좋을 듯 싶은디
    const { day }  = useParams();
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ))
    
    return <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>
}