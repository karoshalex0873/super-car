import React from 'react';
import Landing from './componets/Landing';
import Cars from './componets/Cars';
import Reach from './componets/Reach';

const App = () => {
  return (
    <div className="bg-black ">
      <div className="bg-black/50"></div>
      
        <Landing />
        <Cars />
        <Reach />
      </div>
  );
};

export default App;
