import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPokemons,
  getPokemonsStatus,
  getPokemonsError,
  fetchPokemons
} from '../../store/slice/example';

function Example() {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectAllPokemons);
  const pokemonStatus = useSelector(getPokemonsStatus);
  const error = useSelector(getPokemonsError);

  useEffect(() => {
    if (pokemonStatus === 'idle') {
      dispatch(fetchPokemons({ offset: 0, limit: 151 }));
    }
  }, [pokemonStatus, dispatch]);

  let contentToDisplay = '';
  if (pokemonStatus === 'loading') {
    contentToDisplay = <h2>Loading...</h2>;
  } else if (pokemonStatus === 'succeeded') {
    contentToDisplay = pokemons.results.map((data, i) => (
      <div key={i}>
        <h2>{data.name}</h2>
        <p>{data.url}</p>
        <hr />
      </div>
    ));
  } else if (pokemonStatus === 'failed') {
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
