import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExamples, clearResponse } from '../../store/slice/example';

function Example() {
  const dispatch = useDispatch();
  const { loading, items, response } = useSelector((state) => state.exampleKey);

  useEffect(() => {
    dispatch(fetchExamples({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (response === 'fetch') dispatch(clearResponse());
  }, [response]);

  return (
    <>
      <p>Example</p>
      <Link to="/">Home</Link>
      <Link to="/formexample">FormExample</Link>
      {loading ? <p> Loading... </p> : null}
      {!loading && items?.data?.length == 0 ? <p> No Records </p> : null}
      {items?.data?.length &&
        items.data.map((data, i) => (
          <div key={i}>
            <h2>
              <Link to={`/formexample/${data.id}`}>{data.name}</Link>
            </h2>
            <hr />
          </div>
        ))}
    </>
  );
}

export default Example;
