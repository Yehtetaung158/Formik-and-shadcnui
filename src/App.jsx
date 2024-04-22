import React from "react";
import { Route, Routes } from "react-router-dom";
import FomikPage from "./page/Fomik.page";
import ShadcnUiPage from "./page/ShadcnUi.page";



const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/"  element={<FomikPage/>}/>
            <Route path="sha"  element={<ShadcnUiPage/>}/>
        </Routes>
     
    </div>
  );
};

export default App;
