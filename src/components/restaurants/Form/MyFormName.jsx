import React from "react";
import { Form, Input } from "antd";

function MyFormName() {
  return (
    <Form.Item
      label="Nombre:"
      name="name"
      rules={[{ required: true, message: "Por favor intruduce tu correo!" }]}
    >
      <Input />
    </Form.Item>
  );
}

export default MyFormName;
