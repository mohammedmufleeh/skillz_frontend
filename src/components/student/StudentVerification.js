import React, { useState, useEffect } from "react";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import OTPInput from "otp-input-react";
import OtpTimer from "otp-timer";
import DotLoader from "react-spinners/DotLoader";
import { register, reset } from "../../features/auth/authSlice";
const baseUrl = "http://localhost:8800";
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.mobile) {
    errors.mobile = "Required";
  } else if (values.mobile.length != 10) {
    errors.mobile = "phone no. must be 10 character long ";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "password must be 8 character long ";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "Required";
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = "password does not match ";
  }
  return errors;
};
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [OTP, setOTP] = useState("");
  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // Formik starts
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      mobile: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      setUserData(values);
      const checkUser = await axios.post(`${baseUrl}/api/auth/checkUser`, {
        email: values.email,
        username: values.username,
      });
      if (checkUser.data == "emailExist") {
        toast.error("Email is already taken");
      } else if (checkUser.data == "nameExist") {
        toast.error("username is already taken");
      } else {
        const otpData = await axios.post(`${baseUrl}/api/auth/otpSend`, {
          mobile: values.mobile,
        });
        if (otpData.data == "success") {
          setLoading(false);
          setOpen(true);
        }
      }
    },
  });
  //formik ends
  const validateOtp = async (e) => {
    e.preventDefault();
    if (OTP.length === 4) {
      const inOtpData = await axios.post(
        `${baseUrl}/api/auth/otpConfirmation`,
        {
          mobile: userData.mobile,
          otp: OTP,
        }
      );
      if (inOtpData.data == "otpConfirmed") {
        dispatch(register(userData));
      } else {
        console.log("otp not confirmed");
      }
    } else {
      console.log(" OTP is Not 4 digit");
    }
  };
  const { user, isError, isAdmin, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isAdmin) {
      navigate("/admin");
    }
    if (user || isSuccess) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isError, isAdmin, isSuccess, message, navigate, dispatch]);

  return (
    <>
      <div className="login">
        <div className="login_wrapper">
          <div className="login_wrap">
            <div className="login_1">
              <img src="../../icons/facebook.svg" alt="" />
              <span></span>
            </div>
            <div className="login_2">
              <div className="login_2_wrap">
                <form onSubmit={formik.handleSubmit}>
                  <div className="input_wrap">
                    <input
                      className="input_border"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      type={"text"}
                      placeholder="Username"
                    />
                    {formik.errors.username ? (
                      <div className="error_text">{formik.errors.username}</div>
                    ) : null}
                    <input
                      className="input_border"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      type={"text"}
                      placeholder="Full Name"
                    />
                    {formik.errors.name ? (
                      <div className="error_text">{formik.errors.name}</div>
                    ) : null}

                    <input
                      className="input_border"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      type={"email"}
                      placeholder="Email"
                    />
                    {formik.errors.email ? (
                      <div className="error_text">{formik.errors.email}</div>
                    ) : null}
                    <input
                      className="input_border"
                      name="mobile"
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      type={"mobile"}
                      placeholder="Phone Number"
                    />
                    {formik.errors.mobile ? (
                      <div className="error_text">{formik.errors.mobile}</div>
                    ) : null}
                    <input
                      className="input_border"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      type={"password"}
                      placeholder="Password"
                    />
                    {formik.errors.password ? (
                      <div className="error_text">{formik.errors.password}</div>
                    ) : null}
                    <input
                      className="input_border"
                      name="confirmpassword"
                      value={formik.values.confirmpassword}
                      onChange={formik.handleChange}
                      type={"password"}
                      placeholder="Confirm Password"
                    />
                    {formik.errors.confirmpassword ? (
                      <div className="error_text">
                        {formik.errors.confirmpassword}
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="blue_btn"
                    style={{ backgroundColor: "#42b72a", border: "none" }}
                  >
                    Register
                  </button>
                </form>

                <DotLoader color="#1876f2" loading={loading} size={30} />

                <div className="sign_splitter"></div>

                <span>Already have an Account?</span>
                <Link to="/">
                  {" "}
                  <span className="blue_btn">Login Here</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <StyledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            p={3}
            textAlign="center"
            bgcolor={"background.default"}
            color={"text.primary"}
            borderRadius={3}
            sx={{
              width: { sm: 300, md: 400 },
            }}
          >
            <Typography variant="h6">Enter Your OTP</Typography>
            <Divider
              textAlign="center"
              sx={{
                width: "100%",

                bgcolor: "background.paper",
                mt: { xs: 1, md: 2 },
                mb: 2,
                color: "gray",
              }}
            ></Divider>
            <Box sx={{ marginLeft: { sm: "50px", md: "100px" } }}>
              <OTPInput
                value={OTP}
                inputStyles={{
                  width: "2rem",
                  height: "2rem",
                  margin: "20px 0.25rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid #051b34",
                }}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
              />
            </Box>
            <OtpTimer
              seconds={0}
              minutes={1}
              ButtonText="Resend OTP"
              buttonColor={"black"}
              background={"none"}
            />
            <Divider
              textAlign="center"
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                mt: { xs: 1, md: 2 },
                mb: 2,
                color: "gray",
              }}
            ></Divider>

            <Button
              type="submit"
              onClick={(e) => {
                validateOtp(e);
              }}
              sx={{
                mt: 2,
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3c52b2",
                },
                color: "#fff",
                bgcolor: "#1876d2",
              }}
              variant="outlined"
            >
              validate
            </Button>
          </Box>
        </StyledModal>
      </div>
    </>
  );
}