import React, { useEffect } from 'react';
import './App.css';
import Maincontainer from './container/Layout'


const App = () => {
  useEffect(() => {
    getUserData();

  });

  // https://drive.google.com/file/d/1Wdbh9eCHfPYaME884Sltagz6o0WvVUJU/view?usp=sharing

  const getUserData = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://drive.google.com/file/d/1Wdbh9eCHfPYaME884Sltagz6o0WvVUJU/view?usp=sharing"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.text())
      .then(contents => console.log(contents))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

  }
  return (
    <div className="App">
      <Maincontainer />
    </div>
  );
}

export default App;

