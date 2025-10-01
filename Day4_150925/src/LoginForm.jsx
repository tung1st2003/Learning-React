import "./App.css";
function Login() {
  return (
    <>
      <div className="box1">
        <div className="textlogin">
          <h2>Đăng nhập</h2>
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

          {/* <input type="text" placeholder="Email" className="email" />

          <input type="text" placeholder="Mật khẩu" className="password" /> */}
        </div>
        a
        <div className="note">
          <input type="checkbox" className="checkbox" />
          <p className="wordcheckbox">Ghi nhớ đăng nhập</p>
        </div>
        <button className="btnlogin">Đăng nhập</button>
        <p className="forgetpass">Quên mật khẩu</p>
        <p className="loginby">Đăng nhập bằng</p>
        <div className="logogg"></div>
      </div>
    </>
  );
}

export default Login;
