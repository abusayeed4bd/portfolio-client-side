import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Project from './pages/Home/Project';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Shared/Contact';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>

        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/project/:id' element={<Project></Project>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
