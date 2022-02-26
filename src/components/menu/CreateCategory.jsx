import React, { useState, useContext } from "react";
import { Modal, Button, Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { FirebaseContext } from "../../firebase";

function CreateCategory({ paramsId }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { firebase } = useContext(FirebaseContext);

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
  const onFinish = async (values) => {
    const categoryId = uuidv4();

    try {
      
      const data = {
        category: [{ ...values, categoryId }],
      };

      console.log(data);
      await firebase.updateOneDocument("restaurants", paramsId, data);
      console.log("todo ok");
    } catch (error) {
      console.log(error);
    }
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
