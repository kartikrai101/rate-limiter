import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    const func = async () => {
      const res = await axios.get('http://localhost:8000/api/v1')
      console.log(res.data.name);
      setData(res.data.name);
    }
    func();
  }, []);

  return (
    <Routes>
      <Route path={'/'} element={<Home/>} ></Route>
    </Routes>
  );
}

export default App;
