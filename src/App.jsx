import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import react from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import Hero from './components/hero/Hero'
import Feed from "./components/feedback/Feed";
import Signup from "./pages/Signup";


function App() {
 

  return (
    <>
   
 {/* <Router>
 <Navbar/>
 
 <Hero/>
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/signup" element={<Signup />} />
       </Routes>
       <Footer/>
      </Router> */}
        
 
    </>
  )
}

export default App
