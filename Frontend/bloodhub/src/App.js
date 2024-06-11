import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/HomePage/home'
import DonorReg from 'Components/Pages/DonorRegistration/DonorReg';
import Footer from 'Components/Molecules/footer/footer';
import SeekerReg from 'Components/Pages/SeekerRegistration/SeekerReg';
import BlogPage from 'Components/Pages/BlogPage/BlogPage';


function App() {

  return (
    <>
    <Router>
      <Routes>

        {/* Home or landing page */}
        <Route path='/' element={<Home />}/>
        {/* Donor Registration Page  */}
        <Route path='/donorRegistration' element={<DonorReg />}/>
        {/* SeekerRegistrationPage */}
        <Route path='/seekerRegistration' element={<SeekerReg />}/>
        {/* BlogPage */}
        <Route path = '/Blogs' element={<BlogPage/>}/>
        <Route path='/Footer' element={<Footer />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
