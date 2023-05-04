import Todos from './components/Todo';
import './App.css';

function App() {
  return (
    <div>
      <Todos items={["Hello there", "Hi there"]}/>
    </div>
  );
}

export default App;
