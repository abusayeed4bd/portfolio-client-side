import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

      </Routes>

    </div>
  );
}

export default App;
