import React from "react";
import { useFormik } from "formik";
import { redirect } from "react-router-dom";
import User from "../assets/user.png";
import { Link } from "react-router-dom";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="signupDiv">
      <img src={User} alt="" width="200px" />
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={formik.handleSubmit}
      >
        <label className="signUpLabel" htmlFor="firstName">
          First Name
        </label>
        <input
          className="signUpInput"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label className="signUpLabel" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="signUpInput"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <label className="signUpLabel" htmlFor="email">
          Email Address
        </label>
        <input
          className="signUpInput"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <button
          style={{ marginTop: "14px", cursor: "pointer" }}
          className="signupBtn"
          type="submit"
          onClick={() => {
            return redirect("/");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
