import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

function MyFormListSocialMedia() {
  return (
    <Row justify="end">
      <Col span={20}>
        <Form.List name="socialMedia">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "name"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                    wrapperCol={{ span: 20 }}
                  >
                    <Input placeholder="nombre de la red social" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "url"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                    wrapperCol={{ span: 20 }}
                  >
                    <Input
                      placeholder="url de la red social"
                      addonBefore="https://"
                    />
                  </Form.Item>
                  <Col>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Agregregar red social
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Col>
    </Row>
  );
}

export default MyFormListSocialMedia;
