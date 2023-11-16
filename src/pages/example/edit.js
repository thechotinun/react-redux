import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExample } from '../../store/slice/example';

function Edit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, response } = useSelector((state) => state.exampleKey);
  let navigate = useNavigate();
  const [name, setName] = useState('');

  const handleName = (event) => setName(event.target.value);

  useEffect(() => {
    dispatch(fetchExample({ id: id, params: {} }));
  }, [dispatch]);

  useEffect(() => {
    if (response === 'add') navigate('/example');
  }, [response]);

  const creat = () => {
    console.log(`edit`);
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
          <label htmlFor="name" style={{ margin: '5px 0px', display: 'flex', alignItems: 'center' }}>
            Name:
            <input id="name" name="name" type="text" value={name} onChange={handleName} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </>
  );
}

export default Edit;
