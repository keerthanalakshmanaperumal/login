import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, Card } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short!").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const RegistrationForm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f2f5" }}>
      <Card style={{ width: 400, padding: 20 }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Register</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form Submitted:", values);
            alert("Registration Successful!");
            resetForm(); // Reset form after successful submission
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div style={{ marginBottom: 15 }}>
                <Field
                  name="name"
                  as={Input}
                  prefix={<UserOutlined />}
                  placeholder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <ErrorMessage name="name" component="div" style={{ color: "red", fontSize: "12px" }} />
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: 15 }}>
                <Field
                  name="email"
                  as={Input}
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage name="email" component="div" style={{ color: "red", fontSize: "12px" }} />
              </div>

              {/* Password Field */}
              <div style={{ marginBottom: 15 }}>
                <Field
                  name="password"
                  as={Input.Password}
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage name="password" component="div" style={{ color: "red", fontSize: "12px" }} />
              </div>

              {/* Submit Button */}
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default RegistrationForm;
