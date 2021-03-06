import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button, Form, Input, Upload, InputNumber, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FirebaseContext } from "../../firebase";
import InfoContext from "../../context/InfoContext";

// componenst

function CreateDish() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const { restaurant, categories, addCategory } = useContext(InfoContext);
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
    const categoryUuid = uuidv4();
    try {
      const { upload, categoryId } = values;
      const urlImage = await firebase.uploadImageFirebase(
        `dishes/${upload.file.uid}`,
        upload.file
      );
      delete values.upload;
      const data = { ...values, urlImage };

      await firebase.addOneDocument(
        "menu",
        restaurant.id,
        categoryId,
        categoryUuid,
        data
      );
      // console.log(data);
      form.resetFields();
      // TODO: Colocar la data en el respectivo arrray del state global
      // setCategory(index, data);
      const addCategoryUUid = { ...data, id: categoryUuid };
      addCategory(categoryId, addCategoryUUid);
    } catch (error) {
      console.log(error);
    }
    handleOk();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // image
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e;
  };

  const beforeUpload = ({ file, fileList, event }) => {
    return false;
    //Using Hooks to update the state to the current filelist
    //filelist - [{uid: "-1",url:'Some url to image'}]
  };
  return (
    <>
      <Button className="button-success" onClick={showModal}>
        Nuevo Platillo
      </Button>
      <Modal
        title={`Nuevo platillo`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          labelCol={{ span: 6 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="categoria" name="categoryId">
            <Select placeholder="Selecciona la Categoria">
              {categories.map((category) => {
                return (
                  <Select.Option key={category.id} value={category.id}>
                    {category.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            label="Image:"
            name="upload"
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

          <Form.Item
            name="name"
            label="Platillo"
            rules={[
              {
                required: true,
                message: "El nombre del platillo es necesario",
              },
            ]}
          >
            <Input placeholder="Escribe el nombre del platillo" size="middle" />
          </Form.Item>
          <Form.Item name="description" label="Descripcion">
            <Input placeholder="Descripcion del platillo" size="middle" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Precio"
            rules={[
              {
                required: true,
                message: "El precio es obligatorio",
              },
            ]}
          >
            <InputNumber placeholder="Precio" addonAfter="Q" size="middle" />
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
