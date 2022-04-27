import { useState } from "react";

export default function Hello(props) {
    // Hello({age}) 이런 식으로 바로 안의 age를 받을 수도 있는 거임

    // 넘겨받은 것을 변경을 할 수는 없어 age 라는 변수에다가 넣어서 변경을 해 볼 것입니다
    console.log(props)
    const [name, setName] = useState('Junho');
    // name 은 변수, setName 은 이를 변경해주는 함수 명이라고 생각을 하면 될 것 같습니다
    const [age, setAge] = useState(props.age);

    function changeName() {
        setName(name === "Junho" ? "준호" : "Junho")
        setAge(age + 1)
    }

    
    
    return (
        <div>
            <h1>Props : properties</h1>
            <h3 id="name">
                {name}({age})
            </h3>
            <button onClick={changeName}>Change</button>
        </div>
    ) 
}