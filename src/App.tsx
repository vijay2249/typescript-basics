import Todos from './components/Todo';
import Todo from './models/todo'
import './App.css';

function App() {
  const todos = [
    new Todo('Hello there'),
    new Todo("Bye")
  ]
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
