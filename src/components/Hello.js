import World from "./World"
// import "./Hello.css"
import styles from "./Hello.module.css"

export default function Hello() {

    function showName() {
        console.log("Junho");
    }
    // function showText(e){
    //     console.log(e.target.value)
    // }
    return (
        <div>
            <h1>Hello</h1>
            {/* 함수를 만들어서 버튼에 매핑하기 */}
            <button onClick={showName}>Show name</button>
            {/* 함수를 직접 작성하기 */}
            <button onClick={
                () => console.log(30)
            }>Show age</button>
            <input type="text" onChange={e => {
                console.log(e.target.value);
            }}/>
        </div>
    ) 
}