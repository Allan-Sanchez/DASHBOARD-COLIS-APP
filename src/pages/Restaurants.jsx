import React, { useContext, useEffect } from "react";
import { Button, Col, Row, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseContext } from "../firebase";
const columns = [
  {
    title: "Name (all screens)",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age (medium screen or bigger)",
    dataIndex: "age",
    key: "age",
    responsive: ["md"],
  },
  {
    title: "Address (large screen or bigger)",
    dataIndex: "address",
    key: "address",
    responsive: ["lg"],
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "3",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];

function Restaurants() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(firebase.db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }, []);

  const handleNewRestauran = () => {
    navigate("/restaurant/new");
  };
  return (
    <Row>
      <Col span={24} style={{ padding: 10 }}>
        <Row justify="end">
          <Button onClick={() => handleNewRestauran()} type="primary">
            New Restaurant
          </Button>
        </Row>
      </Col>
      <Col span={24}>
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
}

export default Restaurants;
