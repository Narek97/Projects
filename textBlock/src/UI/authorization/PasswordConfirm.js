import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
function PasswordConfirm() {
  return (
    <Form.Item
      name="confirm"
      label="Confirm Password"
      dependencies={["password"]}
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please confirm your password!",
        },
        { min: 6, message: "password must be minimum 6 characters." },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error("The two passwords that you entered do not match!")
            );
          },
        }),
      ]}
    >
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
      />
    </Form.Item>
  );
}

export default PasswordConfirm;
