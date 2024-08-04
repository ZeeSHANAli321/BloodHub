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
import Loading from 'Components/Pages/LoadingPage/Loading';
import { useState,useEffect } from 'react';
import NoBroadcast from 'Components/Pages/BroadcastPage/NoBroadcast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BroadcastDetail from 'Components/Pages/BroadcastPage/BroadcastDetail';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Service Worker registration successful with scope: ', registration.scope);
  }, function(err) {
    console.log('Service Worker registration failed: ', err);
  });
}

function App() {
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    
    const fetchData = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setLoading(false);
    };

    fetchData();
}, []);

//Aos initilization
useEffect(() => {
  AOS.init({
    // Global settings:
    disable: 'phone', 
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate',
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99,

    offset: 120, 
    delay: 0, 
    duration: 600, 
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
  });
  }, []);



  return (
    <>
    {loading?(<Loading />):(<>
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
        <Route path='loading' element={<Loading />}/>

        {/* Nested Donor user panel  */}
          <Route path='/UserPanelHome' element={<UserPanelBase />}> 
            <Route path='' element={<UserPanelHome />}/>
            <Route path='profile' element={<UserProfile />}/>
            <Route path='map' element={<Map />}/>
            <Route path='map/:lat/:lng' element={<Map />}/>
            <Route path='chat' element={<Chat />}/>
            <Route path='notifications' element={<Notifications />}/>
            <Route path='broadcast' element={<Broadcast />}/>
            <Route path='broadcast/:id' element={<BroadcastDetail />}/>
            <Route path='noBroadcast' element={<NoBroadcast />}/>
          </Route>
        
        <Route path='/Error' element={<ErrorPage />}/>
        <Route path='/RefactoringLayout' element={<UserPanelBase />}/>
        
      </Routes>
    </Router>
    </>)}
    
    </>
  );
}

export default App;
