import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "../Validation/signupValidation";
import app_config from "../config";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const url = app_config.app_url;

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Signup = () => {
  const formSubmit = (values) => {
    // console.log("bhvcv", values);
    axios
      .post(url + "/user/register", values)
      .then((res) => {
        console.log("response", res);
        if (res.request.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registered Successfully!",
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        console.log("status", err);
        if (err.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email is already exist!",
          });
        }
      });
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: formSubmit,
    });
  // console.log(errors);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="card  border border-red-300 mt-7 m-6 p-4">
        <form onSubmit={handleSubmit}>
          <div className="container">
            {" "}
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Register</h1>
              <hr />
            </div>
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              className="border py-2 px-4 w-full mt-2"
              type="text"
              placeholder="Enter Name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p style={{ color: "red", marginTop: "-0.2rem" }}>
                {errors.name}
              </p>
            ) : null}
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              className="border py-2 px-4 w-full mt-2"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p style={{ color: "red", marginTop: "-0.2rem" }}>
                {errors.email}
              </p>
            ) : null}
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              className="border py-2 px-4 w-full mt-2"
              placeholder="Enter Password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p style={{ color: "red", marginTop: "-0.2rem" }}>
                {errors.password}
              </p>
            ) : null}
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              className="border py-2 px-4 w-full mt-2 mb-9"
              name="confirm_password"
              id="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-red-600  m--9">{errors.confirm_password}</p>
            ) : null}
            <hr />
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span className="text-sm">
                  By creating an account you agree to our{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms &amp; Privacy
                  </a>
                  .
                </span>
              </label>
            </div>
            <div className="flex justify-center">
              <button className="border bg-blue-950 text-white p-2 mt-2 w-1/5">
                Register
              </button>
            </div>
            <div className="signin">
              <p>
                Already have an account? <Link to="/Login" className="text-blue-500">Sign in</Link>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

const Wrapper = styled.main`
  * {
    box-sizing: border-box;
  }

  /* Add padding to containers */
  .container {
    padding: 2rem;
    margin: 5rem auto;

    width: 50%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  /* Full-width input fields */
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    background-color: #ddd;
    outline: none;
  }

  /* Overwrite default styles of hr */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }

  /* Set a style for the submit/register button */
  .registerbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  .registerbtn:hover {
    opacity: 1;
  }

  /* Add a blue text color to links */
  a {
    color: dodgerblue;
  }

  /* Set a grey background color and center the text of the "sign in" section */
  .signin {
    background-color: #f1f1f1;
    text-align: center;
    height: 3rem;
  }
`;
