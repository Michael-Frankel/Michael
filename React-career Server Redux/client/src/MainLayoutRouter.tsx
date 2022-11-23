import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

//components
import User from './view/components/pages/User';
import HomePage from './view/components/pages/HomePage';

const MainLayoutRouter = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>

    </div>
  )
}

export default MainLayoutRouter