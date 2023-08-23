import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import {Skills} from './components/Skills.js';
import {Projects} from './components/Projects.js';
import {Resume} from './components/Resume.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
