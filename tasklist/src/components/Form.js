import React from 'react'
import {useState} from 'react';
import {Submit} from './styles/Container.styled';
function Form() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevState) => {
      return [
        ...prevState, 
      {
        id: prevState.length+1, 
        title: title
      }
      ];

    });
    setTitle('');
  }
  return (
    <>
   
    
    <form onSubmit={handleSubmit}>
        <label>
        <span>Add Task : </span>
        <input value={title} onChange = {(e) => {
          setTitle(e.target.value);
        }} type="text" name="Add Task" />
        </label>
       <Submit><input type="submit" value="Submit" /></Submit> 
    </form>
    <ul>
     {tasks.map((task) => {
      return(<li key={task.id}>{task.title}</li>)
     })}
    </ul>
  </>
  )
}

export default Form