import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/landingPage/header"
import Home from './Components/landingPage/home'

function App() {
  return (
    <>
    <Router>
    <Routes>
      {/* Home or landing page */}
      <Route path='/' element={<>
      <Header />
      <Home />
      </>} />



    </Routes>
    </Router>

    </>
  );
}

export default App;
