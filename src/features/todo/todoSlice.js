
import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id : nanoid(),
        text: action.payload,
      }
      state.push(todo);
    },
    removeTodo: (state, action) => {
      state = state.filter((todo)=>
      todo.id !== action.payload
      )
      return state
    },
    editTodo: (state, action) => {
      const itemToEdit = state.filter((item)=>item.id === action.payload.id)
      
            const updatedItem = {...itemToEdit,id:action.payload.id,text:action.payload.text}
            state = state.map(item=>
                item.id === action.payload.id ?updatedItem : item
            )
            return state
        
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
