import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleRedirectPage = (path) => {
    navigate(path);
  };
  return (
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
  );
}

export default NavBar;
