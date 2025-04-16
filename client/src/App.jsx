import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import React from "react";
import UserLayout from "./component/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} /> {/* User Layout */}
          <Route >{/* Admin Layout */}</Route>
   
      </Routes>
    </BrowserRouter>
  );
};

export default App;
