import Todos from './components/Todo';
import Todo from './models/todo'
import './App.css';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [
    new Todo('Hello there'),
    new Todo("Bye")
  ]

  const addTodoHandler = (text: string) =>{
    
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
