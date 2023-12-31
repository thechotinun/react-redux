import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import About from './pages/about';
import Example from './pages/example';
import Pokemon from './pages/pokemon';
import Add from './pages/example/add';
import Edit from './pages/example/edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/example"
            element={
              <Layout>
                <Example />
              </Layout>
            }
          />
          <Route
            path="/formexample"
            element={
              <Layout>
                <Add />
              </Layout>
            }
          />
          <Route
            path="/formexample/:id"
            element={
              <Layout>
                <Edit />
              </Layout>
            }
          />
          <Route
            path="/pokemon"
            element={
              <Layout>
                <Pokemon />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
