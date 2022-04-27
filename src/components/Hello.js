import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
    const [name, setName] = useState('Junho');
    // name 은 변수, setName 은 이를 변경해주는 함수 명이라고 생각을 하면 될 것 같습니다
    const msg = age > 19 ? "성인입니다" : "미성년자입니다";

    return (
        <div>
            <h1>Props : properties</h1>
            <h3 id="name">
                {name}({age}) : {msg}
            </h3>
            <UserName name={name}></UserName>
            {/* 여기서 name은 Hello.js 에서는 state 이지만, UserName 컴포넌트에서는 props 이다. 
            리액트에서 개발자는 데이터만 적절히 바꿔주면 compoent는 알아서 랜더링을 다시 하고 화면의 ui 정보는 알아서 갱신이 된다. 일일히 찾아다닐 필요가 없는 것이다*/}
            <button onClick={() => {
                setName(name === "Junho"?"준호":"Junho");
            }}>Change</button>
        </div>
    ) 
}