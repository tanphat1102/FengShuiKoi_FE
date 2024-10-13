import React from "react";
import AuthenTemplate from "../../components/authen-template";
import { Button, Form, Input } from "antd";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../config/firebase";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { toast } from "react-toastify";
import "./index.css"; // Make sure this matches your file name

function LoginPage() {
  // const navigate = useNavigate();

  const handleLoginGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleLogin = async (values) => {
    try {
      const response = await api.post("login", values);
      const { role, token } = response.data;

      localStorage.setItem("token", token);

      if (role === "ADMIN") {
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <AuthenTemplate>
      <div>
        <h2>Welcome to Feng Shui Koi! </h2>
        <p>Please sign-in to your account and start the adventure</p>
        <Form labelCol={{ span: 24 }} onFinish={handleLogin}>
          <Form.Item
            label="Phone or Email"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Link to="/register" className="register-link">
            Don't have an account? Register a new account
          </Link>

          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
        <div className="googleButton">
          <button class="login-with-google-btn" onClick={handleLoginGoogle}>
            Login with Google
          </button>
        </div>
      </div>
    </AuthenTemplate>
  );
}

export default LoginPage;
