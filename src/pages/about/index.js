import React, { useState } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, setComplete, getAbout } from '../../store/slice/about';

function About() {
  const about = useSelector(getAbout);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');
  return (
    <>
      <p>About</p>
      <img src={logo} className="App-logo" alt="logo" />
      {about.map((todo, idx) => (
        <div key={idx}>
          <p style={{ color: todo.complete ? 'green' : 'red' }}>{todo.title}</p>
          <button onClick={() => dispatch(setComplete(idx))}>Done</button>
        </div>
      ))}
      <div>
        <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
        <button onClick={() => dispatch(addItem({ title: todoTitle, complete: false }))}>
          Add
        </button>
      </div>
      <Link to="/">Home</Link>
    </>
  );
}

export default About;
