import React, {useContext} from "react";
import Todo from '../models/todo'
import {TodosContext} from "../store/todos-context";
import classes from './Todo.module.css'

const Item:React.FC<{item: Todo, onRemove: (text: string) =>void}> = ({item, onRemove}) =>{
  const removeItem = () =>{
    onRemove(item.text);
  }
  return (
    <li className={classes.item} onClick={removeItem}>{item.text}</li>
  )
}

const EachItem:React.FC<{item: Todo, onRemoveItem: () =>void}> = ({item, onRemoveItem}) =>{
  return (
    <li className={classes.item} onClick={onRemoveItem}>{item.text}</li>
  )
}

const Todos: React.FC = () =>{
  const todosCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map(item=> <Item key={item.id} item={item} onRemove={todosCtx.onRemove}/>)}
      <hr />
      {todosCtx.items.map(item=> <EachItem item={item} key={item.id} onRemoveItem={todosCtx.onRemoveItem.bind(null, item.id)}/>)}
    </ul>
  )
}


export default Todos;