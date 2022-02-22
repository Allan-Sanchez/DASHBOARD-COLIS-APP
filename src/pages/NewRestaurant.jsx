import React, { useContext, useState } from "react";
import { Card, Form, Button, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { FirebaseContext } from "../firebase/index";
import { getFormatTime } from "../utils/times";

// componets
import MyFormName from "../components/restaurants/Form/MyFormName";
import MyFormAddress from "../components/restaurants/Form/MyFormAddress";
import MyFormImage from "../components/restaurants/Form/MyFormImage";
import MyFormHours from "../components/restaurants/Form/MyFormHours";
import MyFormDescription from "../components/restaurants/Form/MyFormDescription";
import MyFormListPhone from "../components/restaurants/Form/MyFormListPhone";
import MyFormListSocialMedia from "../components/restaurants/Form/MyFormListSocialMedia";

function NewRestaurant() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { firebase } = useContext(FirebaseContext);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async (values) => {
    setLoading(true);
    // format date
    let { open, close, phone, socialMedia } = values;
    if (phone === undefined) delete values.phone;
    if (socialMedia === undefined) delete values.socialMedia;
    const hourOpen = getFormatTime(open._d);
    const hourClose = getFormatTime(close._d);

    try {
      const { upload } = values;
      const urlImage = await firebase.uploadImageFirebase(
        `restaurants/${upload.file.uid}`,
        upload.file
      );

      // remote old information
      delete values.open;
      delete values.close;
      delete values.upload;

      const data = { ...values, hourClose, hourOpen, urlImage };
      await addDoc(collection(firebase.db, "restaurants"), data);
      setLoading(false);
      navigate("/restaurants");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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
          <MyFormName />
          <MyFormAddress />

          <MyFormImage />
          <MyFormHours />
          <MyFormDescription />

          <MyFormListPhone />
          <MyFormListSocialMedia />

          <Form.Item wrapperCol={{ offset: 18, span: 6 }}>
            {loading ? (
              <Spin />
            ) : (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
}

export default NewRestaurant;
