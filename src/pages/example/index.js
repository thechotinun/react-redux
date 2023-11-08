import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllExample,
  getExampleStatus,
  getExampleError,
  fetchExample
} from '../../store/slice/example';

function Example() {
  const dispatch = useDispatch();
  const example = useSelector(selectAllExample);
  const exampleStatus = useSelector(getExampleStatus);
  const error = useSelector(getExampleError);

  // useEffect(() => {
  //   if (exampleStatus === 'idle') {
  //     dispatch(fetchExample());
  //   }
  // }, [exampleStatus, dispatch]);

  useEffect(() => {
    dispatch(fetchExample());
  }, [dispatch]);

  let contentToDisplay = '';
  if (exampleStatus === 'loading') {
    contentToDisplay = <h2>Loading...</h2>;
  } else if (exampleStatus === 'succeeded') {
    contentToDisplay = example.data.map((data, i) => (
      <div key={i}>
        <h2>{data.name}</h2>
        <hr />
      </div>
    ));
  } else if (exampleStatus === 'failed') {
    contentToDisplay = <p>{error}</p>;
  }

  return (
    <>
      <p>Example</p>
      <Link to="/">Home</Link>
      <div>{contentToDisplay}</div>
    </>
  );
}

export default Example;
