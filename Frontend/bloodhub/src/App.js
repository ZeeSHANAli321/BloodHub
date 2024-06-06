import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/HomePage/home'


function App() {

  return (
    <>
    <Router>
      <Routes>

        {/* Home or landing page */}
        <Route path='/' element={
          <>
            <Home />
          </>
        }/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
