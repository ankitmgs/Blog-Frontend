import { useFormik } from "formik";
import React from "react";
import { loginSchema } from "../Validation/loginValidation";
import axios from "axios";
import app_config from "../config";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
const url = app_config.app_url;

const initialValues = {
  email: "",
  password: "",
};


const Login = () => {
  const navigate = useNavigate();

  const formSubmit = (values) => {
    console.log("abhbsh", values);
    axios
      .post(url + "/user/login", values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have login Successfully!",
          });
          // console.log("hbxhsvch" ,response.data.user);
          const data = response.data.user;
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/");
        }
      })
      .catch((er) => {
        console.log(er);
        console.log(er.response.status);
        if (er.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email or password is in correct!",
          });
        }
      });
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: formSubmit,
    });
  // console.log(values);
  // console.log(errors);
  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen ">
        <Card>
          <div className="p-4">
            <div className="form">
              <div className="login">
                <div className="text-center">
                  <h3 className="text-5xl font-bold ">LOGIN</h3>
                  <p className="text-blue-500">
                    Please enter your credentials to login.
                  </p>
                </div>
              </div>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <input
                  className="border py-2 px-4 w-full mt-2"
                  type="text"
                  placeholder="Username"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p style={{ color: "red" }}>{errors.email}</p>
                ) : null}
                {/* Add validation messages here */}
                <input
                  className="border py-2 px-4 w-full mt-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
            ) : null}
                {/* Add validation messages here */}
                <div className="flex justify-center">
                  <button className="border bg-blue-950 text-white p-2 mt-2 w-1/2">
                    Login
                  </button>
                </div>

                <p>
                  Not registered?{" "}
                  <Link to="/Signup" className="text-blue-400">
                    Create an account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </Card>
      </div>

      {/* <Card className="flex justify-center items-center h-screen border border-5 m-20 p-5">
        <div className="form ">
          <div className="login">
            <div className="text-center ">
              <h3 className="text-5xl font-bold">LOGIN</h3>
              <p className="text-blue-500">
                Please enter your credentials to login.
              </p>
            </div>
          </div>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="login-form"
          >
            <input
              className="border  border-y-8 py-2 px-20  w-full mt-2"
              type="text"
              placeholder="username"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}
            <input
              className="border  border-y-8 py-2 px-20 w-full mt-2"
              type="password"
              placeholder="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
            ) : null}
            <div className="flex justify-center">
              <button className="text-center border border-dotted bg-blue-950 w-1/5 rounded-sm text-white p-2 mt-2">
                login
              </button>
            </div>

            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </Card> */}
    </React.Fragment>
  );
};

export default Login;
