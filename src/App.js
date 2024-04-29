import React from "react";
import SignUP from "./Components/SignUp";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyComponent from "./Components/ShowMap";
import "./App.css";




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>


    <Route path="/" element={ <SignUP/>} />
    <Route path="/map" element={<MyComponent/>} />


   
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
