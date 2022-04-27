import World from "./World"
// import "./Hello.css"
import styles from "./Hello.module.css"

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <World></World>
            {/* <div className="box">Hello's Box</div> */}
            <div className={styles.box}>Hello's Box</div>
        </div>
    ) 
}