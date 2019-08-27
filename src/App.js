import React, { useEffect } from 'react';
import './App.css';
import Maincontainer from './container/Layout'

const App =() =>{
  useEffect(() => {
    getUserData();
  
  });

  const getUserData = async() =>{
    const response =  await  fetch(`https://drive.google.com/file/d/1Wdbh9eCHfPYaME884Sltagz6o0WvVUJU/view?usp=sharing`);
    const data = await response.json();
    console.log(data);
 }
  return (
    <div className="App">
         <Maincontainer/>
    </div>
  );
}

export default App;
