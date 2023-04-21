import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { register, errors } = useAuthContext();

  const handleRegister = async (event) => {
    event.preventDefault();
    register({ name, email, password, password_confirmation });
  };

  return (
    <section className="login_page">
      <div className="login_container">
        <div className="login_box">
          <h1 className="login_title">會員註冊</h1>
          <form className="login_form" onSubmit={handleRegister}>
            <div className="">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="請輸入姓名"
                className="login_input_box"
              />
              {errors.name && (
                <div className="">
                  <span className="">{errors.name[0]}</span>
                </div>
              )}
            </div>
            <div className="">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="請輸入信箱"
                className="login_input_box"
              />
              {errors.email && (
                <div className="">
                  <small className="login_error">
                    該信箱已經被註冊，請使用另一個信箱進行註冊
                  </small>
                </div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="請輸入密碼"
                className="login_input_box"
              />
              {errors.password && (
                <div className="">
                  <span className="">{errors.password[0]}</span>
                </div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="再次確認密碼"
                className="login_input_box"
              />
            </div>
            <div className="">
              <button type="submit" className="login_btn">
                送出
              </button>
            </div>
          </form>

          <p className="">
            已有會員帳號?
            <Link to="/login" className="login_link">
              登入
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
