import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./BlogWebsite/Home";
import Hello from "./BlogWebsite/Hello";
import Error from "./BlogWebsite/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home />}>  </Route>
            <Route path='/politics' element= {<Hello />}>  </Route>
            <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>

    
  );
}

export default App;
