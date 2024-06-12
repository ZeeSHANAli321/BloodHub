import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/HomePage/home'
import DonorReg from 'Components/Pages/DonorRegistration/DonorReg';
import SeekerReg from 'Components/Pages/SeekerRegistration/SeekerReg';
import Login from 'Components/Pages/Login/Login';
import UserPanelHome from 'Components/Pages/userPanelHome/UserPanelHome';

function App() {

  return (
    <>
    <Router>
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/donorRegistration' element={<DonorReg />}/>
        <Route path='/seekerRegistration' element={<SeekerReg />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/UserPanelHome' element={<UserPanelHome />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
