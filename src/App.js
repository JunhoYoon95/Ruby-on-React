import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import styles from "./App.module.css"

function App() {
  // Tutorial 1
  // const name = "Junho";
  // const kyurasi = {
  //   url : "https://kyurasi.tistory.com/",
  //   name : "Tistory"
  // }
  return (
    // Tutorial 1
    // <div className="App">
    //   <div>
    //     <h1 style={{
    //       color: "black",
    //       backgroundColor: "yellow"
    //     }}>
    //       Hello, {name}. <p>age : {25 + 2}</p>
    //     </h1>
    //     <a href={kyurasi.url}>{kyurasi.name} </a>
    //   </div>
    // </div>
    <div className='App'>
      <Hello></Hello>
      <div className={styles.box}>APP's BOX</div>
    </div>
  );
}

export default App;
