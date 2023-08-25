import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import {Skills} from './components/Skills.js';
import {Projects} from './components/Projects.js';
import {Footer} from './components/Footer.js';
import {Academics} from './components/Academics.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Academics/>
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
