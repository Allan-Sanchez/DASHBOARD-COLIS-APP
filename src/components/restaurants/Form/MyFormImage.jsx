import React from "react";
import { Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function MyFormImage() {
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
    <Form.Item
      label="Image:"
      name="upload"
      // valuePropName="fileList"
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
  );
}

export default MyFormImage;
