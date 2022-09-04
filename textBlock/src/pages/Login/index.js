import React, { useEffect } from "react";
import "../style.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginInitial } from "../../redux/userAuthorization/userAction";
import { Form } from "antd";
import Email from "../../UI/authorization/Email";
import Password from "../../UI/authorization/Password";
import AuthButton from "../../UI/authorization/Button";

function Login() {
  const { currentUser, loginError } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const onFinish = async (values) => {
    try {
      dispatch(loginInitial(values.email, values.password));
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="form">
      <span className="form-error">
        {loginError && `Invalid email or password`}
      </span>
      <Form name="register" onFinish={onFinish} scrollToFirstError>
        <Email />
        <Password />
        <AuthButton button="log in" link="Register now!" url="/register" />
      </Form>
    </div>
  );
}

export default Login;
