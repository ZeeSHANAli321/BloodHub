import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/landingPage/header"

function App() {
  return (
    <>
    <Router>
    <Routes>
      {/* Home or landing page */}
      <Route path='/' element={<>
      <Header />
      </>} />



    </Routes>
    </Router>

    </>
  );
}

export default App;
