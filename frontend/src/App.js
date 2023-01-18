import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
function App() {

  const [userName, setUsername] = useState('');

  useEffect(() => {
      getNames();
  }, []);

  const getNames = async () => {
    const responses = await axios.get('/name');
    console.log(responses);
    setUsername(responses.data);
  }

  return (
    <div className="App">
      <h1>My Fron:</h1>
      <h3>My name is {userName}</h3>
     

    </div>
  );
}

export default App;
