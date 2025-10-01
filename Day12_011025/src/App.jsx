import { useState } from "react";
import Home from "./Home";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      navigate("/home");
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };
  return (
    <>
      <div className="container">
        <div className="main-photo">
          <img src="main-photo.png" alt="" />
        </div>

        <div className="login-form-wrapper">
          <div className="login-form">
            <div className="header">
              <h3>Welcome to</h3>
              <h2>Design School</h2>
            </div>

            <button>
              <img src="logo-google4.png" alt="" />
              <span> Login with Google</span>
            </button>

            <button>
              <img src="logo-fb2.png" alt="" />
              <span> Login with Facebook</span>
            </button>
            <span className="or">OR</span>

            <div class="input1-wrapper">
              <img src="logo-email2.png" alt="" />
              <label for="email" class="label">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div class="input2-wrapper">
              <img src="logo-key.png" alt="" />
              <label for="password" class="label">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>

            <div className="options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot">
                Forgot Password?
              </a>
            </div>

            <div className="login-btn-wrapper">
              <button onClick={handleLogin} className="login-btn">
                Login
              </button>

              <p className="register-text">
                Don’t have an account? <a href="#">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
