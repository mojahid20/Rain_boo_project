
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Service from './Pages/Service'
import Login from './Pages/Login';

function App() {
  return (
    < >
      <Navbar>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/About'element={<About />} />
          <Route path='/Service'element={<Service />} />
          <Route path='/login'element={<Login
           />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
