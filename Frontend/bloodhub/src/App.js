import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/HomePage/home'
import DonorReg from 'Components/Pages/DonorRegistration/DonorReg';
import SeekerReg from 'Components/Pages/SeekerRegistration/SeekerReg';
import Login from 'Components/Pages/Login/Login';
import UserPanelHome from 'Components/Pages/userPanelHome/UserPanelHome';
import BlogPage from 'Components/Pages/BlogPage/BlogPage';
import BlogDetailsPage from 'Components/Pages/BlogPage/BlogDetailsPage';
import ErrorPage from 'Components/Pages/errorPage/ErrorPage';
import UserProfile from 'Components/Pages/userProfile/UserProfile';

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
        {/* BlogDetailsPage */}
        <Route path="/blogs/:id" element={<BlogDetailsPage />} />
        <Route path='/Login' element={<Login />}/>


        <Route path='/UserPanelHome' element={<UserPanelHome />}/>
        <Route path='/UserPanelHome/profile' element={<UserProfile />}/>
        <Route path='/Error' element={<ErrorPage />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
