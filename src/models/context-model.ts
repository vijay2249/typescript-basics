import Todo from "./todo"

type context_module = {
  items: Todo[],
  addTodo: (text: string)=> void,
  onRemoveItem: (id:string)=> void,
  onRemove: (text: string)=>void
}

export default context_module