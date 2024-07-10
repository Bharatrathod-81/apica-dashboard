import { useState } from 'react';
import './App.css';
import Layout from './layout/Layout';


function App() {

  const [clickOutside, setClickOutside] = useState(false);

  const clickOutsideHandler = () => {
    setClickOutside(!clickOutside);
  };

  return ( 
    <div className="App" onClick={clickOutsideHandler}>
      <Layout clickOutside={clickOutside} setClickOutside={setClickOutside}/>
    </div>
  );
}

export default App;
