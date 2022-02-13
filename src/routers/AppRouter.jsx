import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRouter from "./PublicRouter";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import DashboardRoute from "./DashboardRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <DashboardRoute />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
