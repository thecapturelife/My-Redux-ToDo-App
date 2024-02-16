import React from 'react'
import {useSelector} from 'react-redux'
// import {useDispatch} from 'react-redux'

function Todos() {
   const todo = useSelector(state => state.todo.todos)
   console.log(todo);

  //  const dispatch = useDispatch();
  
   
  return (
    <>
  
    </>
  )
}

export default Todos

