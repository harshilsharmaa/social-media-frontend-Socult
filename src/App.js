import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' exact element={<Home />} ></Route>
      <Route path='/user/:id/:name' exact element={<Profile />} ></Route>
    </Routes>


  </Router>
  );
}

export default App;
