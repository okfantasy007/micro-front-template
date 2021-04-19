import React from "react";
import { Card, Table, Avatar } from "antd";

const { Column } = Table;
const List = () => {
  // 设置列表信息
  const data = [{
      _id: 1,
      poster: 'http://images.wondershare.com/wsc-18/assets/icon/logo/wondershare-square-white.png',
      name: 'bbb',
      price: 10
  }];
  // 设置页码信息

  return (
    <Card title="React 子应用列表页">
      <Table rowKey="_id" dataSource={data} pagination={false}>
        <Column dataIndex="poster" render={(text) => <Avatar src={text} />} />
        <Column dataIndex="name" />
        <Column dataIndex="price" render={(text) => <>￥ {text}</>} />
      </Table>
    </Card>
  );
};

export default List;
