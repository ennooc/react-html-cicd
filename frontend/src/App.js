import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUsername] = useState('')
  useEffect(() =>{
    getNames();
  }, [])
  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
  }
  return (
    <div >
      <h1>Hello Enoc</h1>
      <h3>My name is {userName}</h3>
    </div>
  );
}

export default App;
