import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 이게 보여질 화면이다
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// id : 루트에 app을 랜더링 시켜준다
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(); // 이거는 퍼포먼스 관련된 코드
