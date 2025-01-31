import { useState } from "react"

function ToDoListForm(props) {
  const {itemToAdd, setItemToAdd, toDos = [], setToDos} = props;

  // console.log(itemToAdd) // displays itemToAdd in console

  const addItem = (event) => {
    event.preventDefault() // prevents the button from refreshing page

    if (itemToAdd.trim() === "") { // does not add an empty string to array
      return
    }

    setToDos((prevToDos) => [...toDos, itemToAdd]) // preserves the existing list, adds new item
    setItemToAdd("") // Clears input field
  }

  return (
    <div>
        <form onSubmit={addItem}>
          <label htmlFor="todo-input">ToDos: </label>
          <input 
            type="text" 
            id="todo-input" 
            onChange={(event) => setItemToAdd(event.target.value)}>
          </input>
          <button type="submit">Add</button>
        </form>
      </div>
    )
}

export default ToDoListForm