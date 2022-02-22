import React from "react";
import { Row, Col, Form, Space, Input, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

function MyFormListPhone() {
  return (
    <Row justify="end">
      <Col span={20}>
        <Form.List name="phone">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "type"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                    wrapperCol={{ span: 20 }}
                    required
                  >
                    <Input placeholder="Tipo de numero" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "number"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                    wrapperCol={{ span: 20 }}
                  >
                    <Input placeholder="numero telefonico" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Agregregar Numeros de telefono
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Col>
    </Row>
  );
}

export default MyFormListPhone;
