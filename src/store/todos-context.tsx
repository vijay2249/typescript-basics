import React, {useState} from 'react'
import Todo from '../models/todo'
import context_module from '../models/context-model'


export const TodosContext = React.createContext<context_module>({
  items:[],
  addTodo: () =>{},
  onRemoveItem: (id: string) => {},
  onRemove: (text: string) =>{}
})

const TodosContextProvider:React.FC<{children: React.ReactNode}> = (props) =>{
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

  const contextValue:context_module ={
    items: todos,
    addTodo: addTodoHandler,
    onRemoveItem: removeItemhandler,
    onRemove: removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
}

export default TodosContextProvider