import React from "react";

import Dashboard from "../pages/dashboard";
import Login from "../session/Login";
import {Route, Routes} from "react-router-dom";
function App() {
   return(
       <Dashboard/>
      /* <Routes>
           <Route exact path='/' element={<Dashboard/>}/>
           <Route path='login' element={<Login/>}/>
       </Routes>*/
    );

}

export default App;
