
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Service from './Pages/Service'
import About from './Pages/About'
import Login from './Pages/Login'
import Home from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Privetrout from './Authentication/Privetrout';
import Addminrout from './Authentication/Addminrout';
import Dashbord from './Pages/Dashbord/Dashbord';





function App() {
  AOS.init();
  return (
    < >
      <Navbar>
        <Routes>
          <Route path='/'element={<Home />} />
         <Route element={<Privetrout />}>
           <Route  path='/Service' element={<Service />}/>
           <Route  path='/about' element={<About />}/>

         </Route>
         <Route element={<Addminrout />}>
           <Route  path='/Dashbord' element={<Dashbord />}/>

         </Route>
         
          <Route path='/login'element={<Login
           />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
          
  

