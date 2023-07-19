import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CanvasAnimation from './components/CanvasAnimation';


const App = () => {
  return (
    <div>
    
    <Navbar /><Home/>
    <div className=' absolute -translate-y-[100vh] z-10' >
      <CanvasAnimation />
    </div>
    
    
    </div>
  );
};

export default App;
