import React, { useEffect } from "react";
import "../style.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerInitial } from "../../redux/userAuthorization/userAction";
import { Form } from "antd";
import Email from "../../UI/authorization/Email";
import Password from "../../UI/authorization/Password";
import PasswordConfirm from "../../UI/authorization/PasswordConfirm";
import AuthButton from "../../UI/authorization/Button";
import UserName from "../../UI/authorization/UserName";

function Register() {
  const { currentUser, registerError } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const onFinish = async (values) => {
    dispatch(registerInitial(values.email, values.password, values.username));
    try {
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="form">
      <p className="form-error">
        {registerError &&
          `The email address is already in use by another account`}
      </p>
      <Form name="login" onFinish={onFinish} scrollToFirstError>
        <Email />
        <UserName />
        <Password />
        <PasswordConfirm />
        <AuthButton button="Register" link="login now!" url="/login" />
      </Form>
    </div>
  );
}

export default Register;
