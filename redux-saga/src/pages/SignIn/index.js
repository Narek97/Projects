import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import ValidationError from "../../components/ValidationError/index";
import { useSelector,useDispatch } from "react-redux";
import { USER_SIGN_IN_REQUEST } from "../../constants";

function SignIn() {
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required email").email("Invalid email"),
    password: Yup.string()
      .required("Required password")
      .min(6, "Min password length 6"),
  });

  const onSubmit = (value) => {
    dispatch({
      type: USER_SIGN_IN_REQUEST,
      payload: value,
    });
  };

  return (
    <div className="signup">
      <h1>Sign In</h1>
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
                <Field type="text" id="email" name="email" />
                <div className="errorMessage">
                  <ErrorMessage name="email" component={ValidationError} />
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

              <button className="btn btn-primary" type={"submit"}>
                Submit
              </button>
              <div className="errorMessage">{error}</div>
            </Form>
          );
        }}
      </Formik>
      <p className="accountText">
        You dont have account?
        <Link className="linkAccount" to="signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
