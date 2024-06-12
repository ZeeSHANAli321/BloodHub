import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/HomePage/home'
import DonorReg from 'Components/Pages/DonorRegistration/DonorReg';
import SeekerReg from 'Components/Pages/SeekerRegistration/SeekerReg';
import Login from 'Components/Pages/Login/Login';
import UserPanelHome from 'Components/Pages/userPanelHome/UserPanelHome';
import BlogPage from 'Components/Pages/BlogPage/BlogPage';


function App() {

  return (
    <>
    <Router>
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/donorRegistration' element={<DonorReg />}/>
        {/* SeekerRegistrationPage */}
        <Route path='/seekerRegistration' element={<SeekerReg />}/>
        {/* BlogPage */}
        <Route path = '/Blogs' element={<BlogPage/>}/>
        <Route path='/Footer' element={<Footer />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/UserPanelHome' element={<UserPanelHome />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
