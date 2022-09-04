import React from "react";
import "./style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import ValidationError from "../../components/ValidationError/index";
import { useDispatch,useSelector } from "react-redux";
import { USER_SIGN_UP_REQUEST } from "../../constants";

function SignUp() {
  const { error } = useSelector((state) => state.user);
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required email").email("Invalid email"),
    password: Yup.string()
      .required("Required password")
      .min(6, "Min password length 6"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required confirm password"),
    firstName: Yup.string().required("Required firstName"),
    lastName: Yup.string().required("Required lastName"),
  });

  const dispatch = useDispatch();

  const onSubmit = (value) => {
    dispatch({
      type: USER_SIGN_UP_REQUEST,
      payload: value,
    });
  };

  return (
    <div className="signup">
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => {
          return (
            <Form>
              <div className="mb-3">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <Field type="email" id="email" name="email" />
                <div className="errorMessage">
                  <ErrorMessage name="email" component={ValidationError} />
                  <span>{error}</span>
                </div>
              </div>
              <div className="mb-3">
                <div>
                  <label htmlFor="firstName">First Name</label>
                </div>
                <Field type="text" id="firstName" name="firstName" />
                <div className="errorMessage">
                  <ErrorMessage name="firstName" component={ValidationError} />
                </div>
              </div>
              <div className="mb-3">
                <div>
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <Field type="text" id="lastName" name="lastName" />
                <div className="errorMessage">
                  <ErrorMessage name="lastName" component={ValidationError} />
                </div>
              </div>
              <div className="mb-3">
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="on"
                />
                <div className="errorMessage">
                  <ErrorMessage name="password" component={ValidationError} />
                </div>
              </div>
              <div className="mb-3">
                <div>
                  <label htmlFor="confirmPassword">Password Confirm</label>
                </div>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="on"
                />
                <div className="errorMessage">
                  <ErrorMessage
                    name="confirmPassword"
                    component={ValidationError}
                  />
                </div>
              </div>
              <button className="btn btn-primary" type={"submit"}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
      <p className="accountText">
        Do you have account?
        <Link className="linkAccount" to="signin">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
