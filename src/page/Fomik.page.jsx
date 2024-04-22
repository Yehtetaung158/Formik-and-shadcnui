import { Formik, Form, Field, ErrorMessage } from "formik";import React from 'react'
import * as yup from "yup";



const handleSubmit = (value) => {
    console.log(value);
  };
  
  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password have to contain last 4")
      .max(8, "Password have to have most 8")
      .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number'
        )
  });

const FomikPage = () => {
    const initialState = {
        email: "",
        password: "",
      };
  return (
    <div>
         <Formik
        // validate={(value) => {
        //   const errors = {};
        //   if (!value.email) {
        //     errors.email = "Email is Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   if (!value.password) {
        //     errors.password = "Password is Required";
        //   }
        //   return errors;
        // }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        initialValues={initialState}
        onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
          <Form className=" flex flex-col gap-2 w-2/4">
            <label htmlFor="email"> Email</label>
            <Field className=" border-2 p-1" type="email" name="email" />
            <ErrorMessage
              component={"p"}
              name="email"
              className=" text-red-500"
            />
            <label htmlFor="password">Password</label>
            <Field className="p-1 border-2" type="password" name="password" />
            <ErrorMessage
              component={"p"}
              name="password"
              className=" text-red-500"
            />
            <button disabled={isSubmitting} className="bg-green-500 text-white p-2 disabled:bg-gray-600" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FomikPage