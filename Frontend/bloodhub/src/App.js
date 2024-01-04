import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/landingPage/header"
import Home from './Components/landingPage/home'
import Footer from './Components/landingPage/footer'
import { useEffect,useState } from 'react' 

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
     
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

  }, []);

  return (
    <>
    <Router>
    <Routes>
      {/* Home or landing page */}
      <Route path='/' element={<>
      <Header type={isScrolled?'none':'home'}/>
      <Home />
      <Footer />
      </>} />
      <Route path='footer/' element={
        <Footer />
      }
      />



    </Routes>
    </Router>

    </>
  );
}

export default App;
