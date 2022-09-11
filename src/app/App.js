import React from "react";


import Login from "../session/Login";
import {Route, Routes} from "react-router-dom";
import Customer from "../pages/customer";
import Item from "../pages/item";
import Dashboard from "../pages/dashboard";


function App() {
   return(
      /* /!*<Customer/>*!/
       <Item/>*/

       <Routes>
           <Route exact path='/' element={<Dashboard/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='item' element={<Item/>}/>
           <Route path='customer' element={<Customer/>}/>

       </Routes>
    );

}

export default App;
