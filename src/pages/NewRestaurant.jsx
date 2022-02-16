import React from "react";
import { Card, Form, Input, Button, Row, Col, Upload, Space } from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
function NewRestaurant() {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <Row justify="center">
      <Card
        title="Crear Restaurante"
        style={{ width: 900 }}
        headStyle={{ textAlign: "center" }}
      >
        <Form
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 13 }}
          initialValues={{ remember: true }}
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <Form.Item
            label="Nombre:"
            name="username"
            rules={[
              { required: true, message: "Por favor intruduce tu correo!" },
            ]}
          >
            <Input />
          </Form.Item>
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

          <Form.Item
            label="Image:"
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            required
            // extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name="logo" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Descripción:" name="description" required>
            <TextArea rows={4} />
          </Form.Item>

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
                        s
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "first"]}
                          rules={[
                            { required: true, message: "Missing first name" },
                          ]}
                          wrapperCol={{ span: 20 }}
                        >
                          <Input placeholder="Tipo de numero" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "last"]}
                          rules={[
                            { required: true, message: "Missing last name" },
                          ]}
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

                        // align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "first"]}
                          rules={[
                            { required: true, message: "Missing first name" },
                          ]}
                          wrapperCol={{ span: 20 }}
                        >
                          <Input placeholder="nombre de la red social" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "last"]}
                          rules={[
                            { required: true, message: "Missing last name" },
                          ]}
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

          <Form.Item wrapperCol={{ offset: 18, span: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
}

export default NewRestaurant;
