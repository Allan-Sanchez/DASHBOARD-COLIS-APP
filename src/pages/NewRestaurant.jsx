import React, { useContext, useState } from "react";
import { Card, Form, Button, Row } from "antd";

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
  const { firebase } = useContext(FirebaseContext);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async (values) => {
    // format date
    let { open, close, phone, socialMedia } = values;
    if (phone === undefined) delete values.phone;
    if (socialMedia === undefined) delete values.socialMedia;
    const hourOpen = getFormatTime(open._d);
    const hourClose = getFormatTime(close._d);
    // remote old date
    delete values.open;
    delete values.close;
    // TODO: CREATE FUNCTION TO UPLOAD IMAGE firebase storage
    delete values.upload;
    const data = { ...values, hourClose, hourOpen };

    try {
      // console.log(data);
      const docRef = await addDoc(collection(firebase.db, "restaurants"), data);
      console.log(docRef);
    } catch (error) {
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
