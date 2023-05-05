import {useRef} from 'react'
import classes from './NewTodo.module.css'

const NewTodo:React.FC<{onAddTodo: (text: string)=> void}> = (props) =>{
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) =>{
    event.preventDefault()
    const text = todoTextInputRef.current!.value
    if(text.trim().length === 0){
      return
    }
    props.onAddTodo(text);
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo