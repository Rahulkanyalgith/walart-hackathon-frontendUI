import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"


function Layout() {
    return (
      <>
      <Navbar/>
      <Outlet />
      <Footer />
      </>
    )
  }
  
  export default Layout