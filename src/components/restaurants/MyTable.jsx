import React from "react";
import { Table, Space, Avatar, Button } from "antd";

const { Column } = Table;

function MyTable({ data }) {
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <Table dataSource={data} rowKey={(item) => item.id}>
      <Column title="Nombre" dataIndex="name" key="name" />
      <Column
        responsive={["sm"]}
        title="imagen"
        dataIndex="urlImage"
        render={(info) => {
          return (
            <Space size="middle">
              <Avatar size={60} src={info} />
            </Space>
          );
        }}
      />
      <Column
        responsive={["sm"]}
        title="Direccion"
        dataIndex="address"
        key="address"
      />
      <Column
        title="Acciones"
        render={(info, render) => {
          return (
            <Space>
              <Button type="primary" onClick={() => handleDelete(render.id)}>
                ver menu
              </Button>
              <Button danger onClick={() => handleDelete(render.id)}>
                Eliminar
              </Button>
            </Space>
          );
        }}
      />
    </Table>
  );
}

export default MyTable;
