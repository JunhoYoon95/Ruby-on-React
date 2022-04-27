import { useState } from "react";

export default function Hello() {

    const [name, setName] = useState('Junho');
    // name 은 변수, setName 은 이를 변경해주는 함수 명이라고 생각을 하면 될 것 같습니다

    function changeName() {
        setName(name === "Junho" ? "준호" : "Junho")
    }
    
    return (
        <div>
            <h1>State of React</h1>
            <h2>컴포넌트의 속성값</h2>
            <h3 id="name">
                {name}
            </h3>
            <button onClick={changeName}>Change</button>
        </div>
    ) 
}