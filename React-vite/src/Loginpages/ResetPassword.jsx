import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [searchParams] = useSearchParams();
  const { token } = useParams();

  const { csrf } = useAuthContext();

  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
      const response = await axios.post("/reset-password", {
        email,
        token,
        password,
        password_confirmation,
      });
      setStatus(response.data.status);
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  return (
    <section className="login_page">

          <div className="login_container">
            <div
              className="login_box"
            >
              {status && (
                <>
                  <div className="">
                    {status}
                  </div>
                  <div className="">
                    Go to{" "}
                    <Link
                      className=""
                      to="/login"
                    >
                      Login
                    </Link>
                  </div>
                </>
              )}
              <h1 className="login_title">
                請輸入你的新密碼
              </h1>
              <form className="login_form" onSubmit={handleSubmit}>
                <div className="">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                    className="login_input_box"
                  />
                  {errors.password && (
                    <div className="">
                      <span className="">
                        {errors.password[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="">
                  <input
                    type="password"
                    value={password_confirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="再次確認密碼"
                    className="login_input_box"
                  />
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="login_btn"
                  >
                    重設
                  </button>
                </div>
              </form>
            </div>
          </div>
    </section>
  );
};

export default ResetPassword;
