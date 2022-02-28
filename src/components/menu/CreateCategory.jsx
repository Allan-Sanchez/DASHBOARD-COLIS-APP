import React, { useState, useContext } from "react";
import { Modal, Button, Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { FirebaseContext } from "../../firebase";

function CreateCategory({ restaurant, paramsId, setRestaurant }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const [form] = Form.useForm();

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
      let data = {};
      if (!restaurant.category) {
        data = {
          category: [{ ...values, categoryId }],
        };
        // add category into restaurant data
        let category = data.category;
        restaurant = { ...restaurant, category };
      } else {
        let { category } = restaurant;
        if (Array.isArray(category)) {
          const newCategory = { ...values, categoryId };
          category.push(newCategory);
        }
        data = {
          category,
        };
      }

      await firebase.updateOneDocument("restaurants", paramsId, data);
      setRestaurant(restaurant);
      form.resetFields();
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
          form={form}
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
