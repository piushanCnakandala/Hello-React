import React from "react";


import Login from "../session/Login";
import {Route, Routes} from "react-router-dom";
import Customer from "../pages/customer";
import Item from "../pages/item";
function App() {
   return(
       /*<Customer/>*/
       <Item/>

      /* <Routes>
           <Route exact path='/' element={<Dashboard/>}/>
           <Route path='login' element={<Login/>}/>
       </Routes>*/
    );

}

export default App;
