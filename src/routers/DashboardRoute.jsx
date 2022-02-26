import React, { useState } from "react";
import { Layout } from "antd";
import "../styles/Layout.css";
import { Route, Routes } from "react-router-dom";

// router
import Register from "../pages/Register";
import Users from "../pages/Users";
import Home from "../pages/Home";
import Restaurants from "../pages/Restaurants";
import Menu from "../pages/Menu";
import NewRestaurant from "../pages/NewRestaurant";
import Restaurant from "../pages/Restaurant";

// components
import NavBar from "../components/NavBar";
import MyFooter from "../components/MyFooter";

const { Header, Content } = Layout;

function DashboardRoute() {
  return (
    <>
      <Layout className="layout-container">
        <NavBar />
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* router here */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/restaurant/:id" element={<Restaurant />} />
                <Route path="/restaurant/new" element={<NewRestaurant />} />
                <Route path="/restaurant/:id/menu" element={<Menu />} />

                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </Content>
          <MyFooter />
        </Layout>
      </Layout>
    </>
  );
}

export default DashboardRoute;
