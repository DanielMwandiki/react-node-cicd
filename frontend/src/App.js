import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [userName, setUserName] = useState('')

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
    setUserName(response.data)
  }

  return (
    <>
      <h1>My Frontend</h1>
      <h3>Hello! My name is still {userName}. Welcome</h3>
    </>

  );
}

export default App;
