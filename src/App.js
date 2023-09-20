import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import NavigationBar from './assets/components/navbar'
import Homepage from './assets/components/homepage';
import Footer from './assets/components/footer'
import Winter from './assets/components/winter'
import Summer from './assets/components/summer'
import Apartments from './assets/components/apartments'
import Apartment from './assets/components/apartment'
import Info from './assets/components/info';


function BasicLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Homepage />} />
          <Route path="info" element={<Info />} />
          <Route path="winter" element={<Winter />} />
          <Route path="summer" element={<Summer />} />
          <Route path="apartments" element={<Apartments />} />
          <Route path="apartment/:roomId" element={<Apartment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
