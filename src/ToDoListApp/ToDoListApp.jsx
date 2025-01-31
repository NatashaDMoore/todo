import { useState } from "react"

import ToDoListForm from './ToDoListForm';
import ToDoListItems from './ToDoListItems';

function ToDoListApp(){
const [toDos, setToDos] = useState([])
const [itemToAdd, setItemToAdd] = useState('')

  return (
    <>
    <h1>ToDo's</h1>
    <ToDoListForm 
      itemToAdd={itemToAdd} 
      setItemToAdd={setItemToAdd} 
      setToDos={setToDos} 
      toDos={toDos}
      />
    <ToDoListItems toDos={toDos}/>
    </>
  )
}
  
export default ToDoListApp