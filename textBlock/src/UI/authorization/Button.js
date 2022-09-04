import React from "react";
import { Form, Button } from "antd";
import { Link } from "react-router-dom";

function AuthButton({ button, link, url }) {
  return (
    <Form.Item>
      <Button className="form-button" type="primary" htmlType="submit">
        {button}
      </Button>
      <p>
        Or{" "}
        <Link className="form-link" to={`${url}`}>
          {link}
        </Link>
      </p>
    </Form.Item>
  );
}

export default AuthButton;
