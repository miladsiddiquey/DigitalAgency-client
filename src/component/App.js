import React from 'react';
import '../style/App.css';
import Home from './Home';
import Navbar from './section/Navbar';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
};

export default App;