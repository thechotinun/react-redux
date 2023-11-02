import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p>Home</p>
      <img src={logo} className="App-logo" alt="logo" />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <Link to="about">About Us</Link>
    </>
  );
}

export default Home;
