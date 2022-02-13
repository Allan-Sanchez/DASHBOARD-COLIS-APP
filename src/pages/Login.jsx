import React, { useContext } from "react";
import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import "../styles/login.css";

function Login() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    // const lastPath = localStorage.getItem('last')
    dispatch({
      type: types.login,
      payload: {
        name: 'allan',
      },
    });

    navigate("/");
  };
  return (
    <div className="login-container">
      <Card
        title="Login"
        style={{ width: 400 }}
        headStyle={{ textAlign: "center" }}
      >
        <Form
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 15 }}
          initialValues={{ remember: true }}
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <Form.Item
            label="Correo Electronico:"
            name="username"
            rules={[
              { required: true, message: "Por favor intruduce tu correo!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Contrasena:" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 18, span: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
