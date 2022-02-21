import React from "react";
import { Form, Input } from "antd";
const { TextArea } = Input;

function MyFormDescription() {
  return (
    <Form.Item
      label="Descripción:"
      name="description"
      rules={[
        {
          required: true,
          message: "Describe lo que vende tu restaurante.",
        },
      ]}
    >
      <TextArea rows={4} />
    </Form.Item>
  );
}

export default MyFormDescription;
