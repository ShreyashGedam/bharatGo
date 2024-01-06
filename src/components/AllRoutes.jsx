import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import CheckOut from "../pages/CheckOut";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/my-orders" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
