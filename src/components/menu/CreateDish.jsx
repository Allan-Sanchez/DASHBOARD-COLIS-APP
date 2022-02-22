import React, { useState } from "react";
import { Modal, Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// componenst

function CreateDish() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // form
  const onFinish = (values) => {
    console.log("Success:", values);
    handleOk();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // image
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e;
    // return e && e.fileList;
  };

  const beforeUpload = ({ file, fileList, event }) => {
    return false;
    //Using Hooks to update the state to the current filelist
    //filelist - [{uid: "-1",url:'Some url to image'}]
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Nuevo Platillo
      </Button>
      <Modal
        title="Crear nueva Categoria"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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
            <Upload
              name="logo"
              listType="picture"
              maxCount={1}
              beforeUpload={beforeUpload}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item name="name">
            <Input
              placeholder="Escribe el nombre de la categoria"
              size="middle"
            />
          </Form.Item>
          <Form.Item name="Description">
            <Input placeholder="Descripcion del platillo" size="middle" />
          </Form.Item>
          <Form.Item name="price">
            <Input placeholder="Precio" size="middle" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" size="middle">
              Guardar Categoria
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreateDish;
