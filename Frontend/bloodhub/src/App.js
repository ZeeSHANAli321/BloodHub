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
import Map from 'Components/Pages/Map/Map';
import UserPanelBase from 'Components/Pages/UserPanelBase';
import Chat from 'Components/Pages/ChatPage/Chat';
import Broadcast from 'Components/Pages/BroadcastPage/Broadcast';
import Notifications from 'Components/Pages/NotificationsPage/Notifications';

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

        {/* Nested Donor user panel  */}
          <Route path='/UserPanelHome' element={<UserPanelBase />}> 
            <Route path='' element={<UserPanelHome />}/>
            <Route path='profile' element={<UserProfile />}/>
            <Route path='map' element={<Map />}/>
            <Route path='chat' element={<Chat />}/>
            <Route path='notifications' element={<Notifications />}/>
            <Route path='broadcast' element={<Broadcast />}/>
          </Route>
        
        <Route path='/Error' element={<ErrorPage />}/>
        <Route path='/RefactoringLayout' element={<UserPanelBase />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
