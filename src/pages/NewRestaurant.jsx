import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  Upload,
  Space,
  TimePicker,
} from "antd";
import moment from "moment";
import {
  UploadOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

import { getFormatTime } from "../utils/times";

const { TextArea } = Input;
function NewRestaurant() {
  const [fields, setFields] = useState([
    {
      name: ["username"],
      value: "Ant Design",
    },
  ]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    // format date
    const { open, close } = values;
    const hourOpen = getFormatTime(open._d);
    const hourClose = getFormatTime(close._d);
    // remote old date
    delete values.open;
    delete values.close;
    const data = { ...values, hourClose, hourOpen };
    console.log(data);
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
            rules={[
              {
                required: true,
                message: "La image del restaurante es necesaria",
              },
            ]}
          >
            <Upload name="logo" listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

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
                          rules={[
                            { required: true, message: "Missing first name" },
                          ]}
                          wrapperCol={{ span: 20 }}
                        >
                          <Input placeholder="Tipo de numero" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "number"]}
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
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "name"]}
                          rules={[
                            { required: true, message: "Missing first name" },
                          ]}
                          wrapperCol={{ span: 20 }}
                        >
                          <Input placeholder="nombre de la red social" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "url"]}
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
