import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/pages/about-us/AboutUs';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import Portfolio from './components/pages/portfolio/Portfolio';
import Services from './components/pages/services/Services';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/inicio" element={ <Home></Home> } />
          <Route path="/acerca-de" element={ <AboutUs></AboutUs> } />
          <Route path="/servicios" element={ <Services></Services> } />
          <Route path="/portafolio" element={ <Portfolio></Portfolio> } />
          <Route path="/contacto" element={ <Contact></Contact> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
