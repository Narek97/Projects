import React from "react";
import "./errorPage.css";
import { Result, Button } from "antd";

import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="errorPage">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <Link to="/">Back</Link>
          </Button>
        }
      />
      ,
    </div>
  );
}

export default ErrorPage;
