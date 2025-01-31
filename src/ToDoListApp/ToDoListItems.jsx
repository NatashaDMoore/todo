function ToDoListItems(props){
  const {toDos} = props;
  return (
    <>
    <h2>Things ToDo:</h2>
      <ul>
        {toDos.map((toDo, index)=> { // this gives each li a key that aligns with its index in the array
          return <li key={index}>{toDo}</li>
        })}
      </ul>
    </>
  )
}

export default ToDoListItems
