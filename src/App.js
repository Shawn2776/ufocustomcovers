import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import About from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>

          <Route exact path='/' element={<><Navbar /><Home /></>}></Route>

          <Route path='/signin' element={<Signin />}></Route>

          <Route path='/register' element={<Register />}></Route>

          <Route path='/orders' element={<Orders />}></Route>

          <Route path='/contact' element={<Contact />}></Route>

          <Route path='/about' element={<About />}></Route>

          <Route path='/account' element={<Account />}></Route>

          <Route path='/cart' element={<Cart />}></Route>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
