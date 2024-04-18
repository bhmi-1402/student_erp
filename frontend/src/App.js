import logo from './logo.svg';
import './App.css';
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
