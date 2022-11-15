import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPannel from '../Components/AdminPannel';
import Users from '../Components/Users'

function AllRoutes() {
  return (
    <Routes>
          <Route path="/" element={<AdminPannel />}></Route>
      <Route path="/user" element={<Users />}></Route>
    </Routes>
  );
}

export default AllRoutes