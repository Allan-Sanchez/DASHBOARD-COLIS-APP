import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "../styles/Layout.css";
import { Route, Routes, useNavigate } from "react-router-dom";

// router
import Register from "../pages/Register";
import Users from "../pages/Users";
import Home from "../pages/Home";
import Restaurants from "../pages/Restaurants";
import NewRestaurant from "../pages/NewRestaurant";

const { Header, Content, Footer, Sider } = Layout;

function DashboardRoute() {
  const navigate = useNavigate();
  const handleRedirectPage = (path) => {
    navigate(path);
  };
  return (
    <>
      <Layout className="layout-container">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => handleRedirectPage("/")}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              onClick={() => handleRedirectPage("/users")}
            >
              Usuarios
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<UploadOutlined />}
              onClick={() => handleRedirectPage("/restaurants")}
            >
              Restaurantes
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UploadOutlined />}
              onClick={() => handleRedirectPage("/register")}
            >
              Register
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<UserOutlined />}
              onClick={() => handleRedirectPage("/logout")}
            >
              Salir
            </Menu.Item>
          </Menu>
        </Sider>
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
                <Route path="/restaurant/new" element={<NewRestaurant />} />

                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default DashboardRoute;
