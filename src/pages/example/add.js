import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postExample } from '../../store/slice/example';

function Add() {
  const dispatch = useDispatch();
  const { loading, error, response } = useSelector((state) => state.exampleKey);
  let navigate = useNavigate();
  const [name, setName] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  const creat = () => {
    dispatch(postExample({ name: name }));
    if (response === 'add') navigate('/example');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    creat();
  };

  return (
    <>
      <p>FormExample</p>
      <Link to="/example">Example</Link>
      {loading ? (
        <p> Loading... </p>
      ) : (
        <form style={{ display: 'grid' }} onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            style={{ margin: '5px 0px', display: 'flex', alignItems: 'center' }}>
            Name:
            <input id="name" name="name" type="text" value={name} onChange={handleName} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </>
  );
}

export default Add;
