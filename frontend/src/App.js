import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
    setUsername(response.data)
  }
  return (
    <div >
      <Home />
      <Footer />
      <Header />
      <h3>{userName}</h3>
    </div>
  );
}

export default App;
