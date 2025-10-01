import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="ids">
            <div className="ids-logo"></div>
          </div>
          <button className="register-service">Đăng kí dịch vụ</button>
        </div>

        <div className="text-login">
          <h2>Đăng nhập</h2>

          <div className="login-form-text">
            <p>Bạn chưa có Tài khoản?</p>
            <a className="link">Đăng ký ngay</a>
          </div>
        </div>

        <div className="input">
          <div className="input-mail-wrapper">
            <div className="input-mail-logo"></div>
            <input className="input-mail" placeholder="Email" type="text" />
          </div>
          <div className="input-password-wrapper">
            <div className="input-password-logo"></div>
            <input
              className="input-password"
              placeholder="Mật khẩu"
              type="text"
            />
          </div>

          <div className="capcha">
            <div className="tick"></div>
            <div className="wordcapcha">Im not a robot</div>
            <div className="recapcha"></div>
          </div>

          <div className="note">
            <input type="checkbox" className="checkbox" />
            <p className="wordcheckbox">Ghi nhớ đăng nhập</p>
          </div>
          <button className="btnlogin">Đăng nhập</button>
          <p className="forgetpass">Quên mật khẩu</p>
          <p className="loginby">Đăng nhập bằng</p>
          <div className="logogg"></div>
          <div className="hotline">
            <div className="support">Hotline Hỗ trợ:</div>
            <divs className="phone">13124344</divs>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
