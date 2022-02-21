import React from "react";
import { Form, Input, TimePicker } from "antd";
import moment from "moment";

function MyFormHours() {
  return (
    <Form.Item label="Horarios de Atencion" required>
      <Input.Group compact>
        <Form.Item
          name="open"
          rules={[
            {
              required: true,
              message: "La hora es requerida",
            },
          ]}
        >
          <TimePicker
            use12Hours
            placeholder="Abrimos"
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
        </Form.Item>
        <Form.Item
          name="close"
          rules={[
            {
              required: true,
              message: "La hora es requerida",
            },
          ]}
        >
          <TimePicker
            use12Hours
            placeholder="Cerramos"
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
        </Form.Item>
      </Input.Group>
    </Form.Item>
  );
}

export default MyFormHours;
