import React from "react";
import { Form, Input } from "antd";

function MyFormAddress() {
  return (
    <Form.Item
      label="Direccion:"
      name="address"
      rules={[
        { required: true, message: "Por favor intruduce tu correo!" },
        {
          min: 4,
          message: "La dirreccion debe de ser mayor a 4 digitos",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default MyFormAddress;
