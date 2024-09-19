import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter.js';
import Event from './components/Event.js';
import Form from './components/Form.js';
import Navigation from './pages/Navigation.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));