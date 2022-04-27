import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className='App'>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
      {/* Hello 컴포넌트를 3개를 두었습니다. 같은 것 같지만, 각각의 컴포넌트는 서로에게 영향을 주지 않습니다. */}
    </div>
  );
}

export default App;
