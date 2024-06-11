import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/HomePage/home'
import DonorReg from 'Components/Pages/DonorRegistration/DonorReg';
import Footer from 'Components/Molecules/footer/footer';
import SeekerReg from 'Components/Pages/SeekerRegistration/SeekerReg';
import Login from 'Components/Pages/Login/Login';

function App() {

  return (
    <>
    <Router>
      <Routes>

        {/* Home or landing page */}
        <Route path='/' element={<Home />}/>
        {/* Donor Registration Page  */}
        <Route path='/donorRegistration' element={<DonorReg />}/>
        <Route path='/seekerRegistration' element={<SeekerReg />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Footer' element={<Footer />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
