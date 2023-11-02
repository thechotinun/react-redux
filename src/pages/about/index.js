import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <p>About</p>
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/">Home</Link>
    </>
  );
}

export default About;
