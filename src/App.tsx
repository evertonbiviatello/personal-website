// import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './components/Home';
import About from './components/About';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );

}