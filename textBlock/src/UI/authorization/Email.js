import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

function Email() {
  return (
    <Form.Item
      name="email"
      label="E-mail"
      className="form-item"
      rules={[
        {
          type: "email",
          message: "The input is not valid E-mail!",
        },
        {
          required: true,
          message: "Please input your E-mail!",
        },
      ]}
    >
      <Input prefix={<MailOutlined className="site-form-item-icon" />} />
    </Form.Item>
  );
}

export default Email;
