import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";

function CreateCategory() {
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
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Crear Categoria
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
          <Form.Item name="name">
            <Input
              placeholder="Escribe el nombre de la categoria"
              size="middle"
            />
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

export default CreateCategory;
