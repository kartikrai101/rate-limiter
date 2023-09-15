import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Home/>} ></Route>
    </Routes>
  );
}

export default App;
