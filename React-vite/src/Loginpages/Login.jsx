import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useAuthContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <section className="login_page">
      <div className="login_container">
            <div className="login_box">
              <h1 className="login_title">會員登入</h1>
              <form className="login_form" onSubmit={handleLogin}>
                <div className="">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="請輸入信箱"
                    className="login_input_box"
                  />
                  {/* {errors.email && (
                    <div className="">
                      <small className="">
                      很抱歉，您輸入的帳號不正確。請再試一次。
                      </small>
                    </div>
                  )} */}
                </div>


                <div className="">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                    className="login_input_box"
                  />
                  {errors.password || errors.email &&  (
                    <div className="">
                      <small className="login_error">
                      很抱歉，您輸入的帳號或密碼不正確。請再試一次。
                      <br />
                      如果忘記密碼，請點擊「忘記密碼」進行密碼重設。
                      </small>
                    </div>
                  )}
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="login_btn"
                  >
                    登入
                  </button>
                </div>
              </form>
              <Link
                to="/forgotpassword"
                className="login_link"
              >
                忘記密碼?
              </Link>
              <p className="">
                還不是會員?
                <Link to="/register" className="login_link">
                  註冊
                </Link>
              </p>
            </div>
          </div>
    </section>
  );
};

export default Login;
