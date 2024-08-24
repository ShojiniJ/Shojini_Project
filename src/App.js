
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
<Router>
  <Routes>
<Route path ='/' element ={<Login />} />
<Route path ='/home' element ={<Home  />} />
  </Routes>
</Router>
    

  );
}

export default App;
