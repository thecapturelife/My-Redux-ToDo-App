
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../features/todo/todoSlice';

const TodoItem = ({ id, text, removeTodoHandler, editTodoHandler }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTodoHandler(id, updatedText);
    setEditing(false);
  };

  const handleCancel = () => {
    setUpdatedText(text);
    setEditing(false);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      backgroundColor: '#f0f0f0',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <div>
          <div>
  <button
    style={{
      background: 'red',
      borderRadius: '5px',
      width: '50px',
      marginRight: '10px',
    }}
    className="saveButton orangeButton"
    onClick={handleSave}
  >
    Save
  </button>
  <button
    style={{
      background: 'blue',
      borderRadius: '5px',
    }}
    className="cancelButton orangeButton"
    onClick={handleCancel}
  >
    Cancel
  </button>
</div>
          </div>
        </>
      ) : (
        <>
          <span>{text}</span>
          <div>
  <button
    style={{
      background: 'red',
      width: '50px',
      borderRadius: '5px',
      marginRight: '10px',
    }}
    className="editButton orangeButton"
    onClick={handleEdit}
  >
    Edit
  </button>
  <button
    style={{
      background: 'blue',
      borderRadius: '5px',
    }}
    className="removeButton orangeButton"
    onClick={() => removeTodoHandler(id)}
  >
    Remove
  </button>
</div>

        </>
      )}
    </div>
  );
};

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      setError('Please enter a TODO before adding.');
      return;
    }

    dispatch(addTodo(input));
    setInput('');
    setError('');
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const editTodoHandler = (id, text) => {
    const updatedText = prompt('Edit TODO:', text);

    if (updatedText !== null) {
      dispatch(editTodo({ id, text: updatedText }));
    }
  };

  return (
    <div>
      <div style={{
        backgroundColor: '#3498db',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color: '#ecf0f1',
        marginBottom: '20px',
      }}>
        <form onSubmit={addTodoHandler} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <input
            type='text'
            placeholder='Enter a TODO'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              marginBottom: '10px',
              width: '300px',
              color: 'black'
            }}
          />
          <button style={{background:'orange', borderRadius:'5px', width:'100px',height:'40px'}} className="addButton orangeButton" type="submit">
            Add
          </button>
          {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
        </form>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginBottom: '10px' }}>
            <TodoItem
              id={todo.id}
              text={todo.text}
              removeTodoHandler={removeTodoHandler}
              editTodoHandler={editTodoHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
