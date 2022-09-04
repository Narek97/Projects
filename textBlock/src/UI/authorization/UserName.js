import React from "react";
import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
function UserName() {
  return (
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} />
    </Form.Item>
  );
}

export default UserName;
