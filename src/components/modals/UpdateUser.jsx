import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import { updateUser } from "../../store/reducer/user/userSlice";

const UpdateUser = ({ show, handleClose, userId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => {
    return user.id === userId;
  });
  // eslint-disable-next-line no-unused-vars
  const [updatedUser, setUpdatedUser] = useState(user);

  const formik = useFormik({
    initialValues: {
      first_name : user?.first_name || "",
      email: user?.email || "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter correct format")
    }),
    onSubmit: (values, { resetForm }) => {
      setUpdatedUser({
        id: userId,
        user: { ...values },
      });
      handleClose();
      dispatch(
        updateUser({
          id: userId,
          user: values,
        })
      );
      resetForm();
    },
  });

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="formik_form_container"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <input
                type="text"
                name="first_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.first_name}
                placeholder="Name"
              />
              {formik.touched.first_name && formik.errors.first_name && (
                <p style={{ color: "red" }} className="mb-0">
                  {formik.errors.first_name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email && (
                <p style={{ color: "red" }} className="mb-0">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateUser;
