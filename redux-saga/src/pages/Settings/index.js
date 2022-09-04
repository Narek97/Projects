import React from "react";
import "./style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ValidationError from "../../components/ValidationError/index";
import { useDispatch,useSelector } from "react-redux";
import { USER_UPDATE_SETTINGS_REQUEST } from "../../constants";

function Settings() {
  const { id, email, firstName, lastName, role } = useSelector(
    (state) => state.user.userData
  );

  const initialValues = {
    id,
    email,
    firstName,
    lastName,
    password: "",
    role,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required email").email("Invalid email"),
    password: Yup.string()
      .required("Required password")
      .min(6, "Min password length 6"),
    firstName: Yup.string().required("Required firstName"),
    lastName: Yup.string().required("Required lastName"),
  });

  const dispatch = useDispatch();

  const onSubmit = (value) => {
    dispatch({
      type: USER_UPDATE_SETTINGS_REQUEST,
      payload: value,
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => {
          return (
            <Form className="settings">
              <div className="mb-3">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <Field type="email" id="email" name="email" />
                <div className="errorMessage">
                  <ErrorMessage name="email" component={ValidationError} />
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
              <button className="btn btn-primary" type={"submit"}>
                Change settings
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Settings;
