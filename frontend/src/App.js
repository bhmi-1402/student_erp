import logo from './logo.svg';
import './App.css';
import { useSelector , useDispatch} from 'react-redux'; 
import { addUser } from './store/userSlice';
import { useEffect, useState } from 'react';
function App() {
  
  const [coin , setCoin] = useState(1);
  const [reset,SetReset] = useState(true);
  function increseHandler(){
    setCoin(coin+1)
    
  }
  
  function setValue(){
    setCoin(1000)
  }

  useEffect(()=>{
    setValue();
  },[coin]);

  console.log("Render");

  return (
    <div className="App">
      <h1>My balance is  : {coin} rupees</h1>
      <button onClick={increseHandler}>Increase</button>
      <button onClick={()=>SetReset(!reset)}>Reset</button>
    </div>
  );
}

export default App;
