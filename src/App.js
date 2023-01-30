import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import Image from './Nav/Image'
import Login from './Nav/Login';

function App() {
  return (
    <div className="App">
      <Nav/>

      <Image/>
      <Login/>
    </div>
  );
}

export default App;
