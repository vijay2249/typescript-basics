import {useState} from 'react'
import Todos from './components/Todo';
import Todo from './models/todo'
import NewTodo from './components/NewTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) =>{
    const newTodo = new Todo(text)
    setTodos(prevState => {
      return prevState.concat(newTodo)
    })
  }

  const removeTodoHandler = (text: string) =>{
    setTodos(prevState => {
      return prevState.filter(item => item.text !== text)
    })
  }

  const removeItemhandler = (id: string) =>{
    setTodos(prevState =>{
      return prevState.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemove={removeTodoHandler} onRemoveItem={removeItemhandler}/>
    </div>
  );
}

export default App;
