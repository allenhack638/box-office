import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Starred from "./Components/HomePage/Starred";
import MainLayout from "./Components/HomePage/MainLayout";
import ShowPage from "./Components/Details/ShowPage";
import { GlobalTheme } from "./GlobalTheme";

function App() {
  return (
    <GlobalTheme>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>

          <Route path="/show/:showId" element={<ShowPage />} />

          <Route path="/form" element={<h1>form submitted successfully</h1>} />
          <Route path="*" element={<div>Page Not found</div>} />
        </Routes>
      </BrowserRouter>
    </GlobalTheme>
  );
}

export default App;
