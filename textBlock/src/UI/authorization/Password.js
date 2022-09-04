import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
function Password() {
  return (
    <Form.Item
      name="password"
      label="Password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
        { min: 6, message: "password must be minimum 6 characters." },
      ]}
      hasFeedback
    >
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
      />
    </Form.Item>
  );
}

export default Password;
