import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Page/Footer/Footer";
import HomeCityguide from "../Page/HomeCityguide";
import HomeRestaurant from "../Page/HomeRestaurant";
const MainRouter = () => {
    return ( <div>
      <Router>
           <Routes>
               <Route exact path="/HomeRestaurant" element={<HomeRestaurant/>}/>
           </Routes>
           <Routes>
             <Route exact path="/" element={<HomeCityguide/>} />
           </Routes>
             <div><h1>Kanyesaro Luc</h1></div>
       </Router>
       
    </div>
     );
}
 
export default MainRouter;