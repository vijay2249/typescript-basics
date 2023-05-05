import Todos from './components/Todo';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';
import './App.css';

function App() {
  

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;


