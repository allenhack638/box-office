import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Starred from "./Components/Starred";
import MainLayout from "./Components/MainLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>

        <Route path="*" element={<div>Page Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
