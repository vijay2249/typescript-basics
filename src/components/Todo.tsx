import React from "react";
import Todo from '../models/todo'
import classes from './Todo.module.css'

const Item:React.FC<{item: Todo, onRemove: (text: string) =>void}> = ({item, onRemove}) =>{
  const removeItem = () =>{
    onRemove(item.text);
  }
  return (
    <li className={classes.item} onClick={removeItem}>{item.text}</li>
  )
}

const Todos: React.FC<{items: Todo[], onRemove: (text: string) => void}> = (props) =>{
  return (
    <ul className={classes.todos}>
      {props.items.map(item=> <Item item={item} onRemove={props.onRemove}/>)}
    </ul>
  )
}


export default Todos;