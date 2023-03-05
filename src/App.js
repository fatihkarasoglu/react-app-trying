import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {
  const key = '48afb245d0fe10f13555b750e33fb5ba';
  useEffect(() => {
    async function getUser() {
      try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`);
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    }
    getUser();
  }, [])
  return (<div className="App">Merhaba</div>);
}

export default App;