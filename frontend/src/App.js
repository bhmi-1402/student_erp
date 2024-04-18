import logo from './logo.svg';
import './App.css';
import { useSelector , useDispatch} from 'react-redux'; 
import { addUser } from './store/userSlice';
import { useEffect, useState } from 'react';

import NavBar from './components/common/Navbar';
import Strip from './components/HomePage/Strip';
function App() {
  
  

  return (
    <div className="App">

      
      <NavBar></NavBar>
      <Strip></Strip>

    </div>
  );
}

export default App;
