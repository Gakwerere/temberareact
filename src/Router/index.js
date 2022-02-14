import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Page/Footer/Footer";
import Navbar1 from "../Page/Navbar/Navbar1"
import HomeCityguide from "../Page/HomeCityguide";
import HomeRestaurant from "../Page/HomeRestaurant";
import HomeBusiness from "../Page/HomeBusiness";
const MainRouter = () => {
    return ( <div>
      <Navbar1/>
      <Router>
           <Routes>
                <Route exact path="/" element={<HomeCityguide/>} />
           </Routes>

           <Routes>
               <Route exact path="/HomeRestaurant" element={<HomeRestaurant/>}/>
           </Routes>
           
           <Routes>
             <Route exact path="/HomeBusiness" element={<HomeBusiness/>} />
           </Routes>

       </Router>
       <div><h1>Main part</h1></div>
       <Footer/>
    </div>
     );
}
 
export default MainRouter;