import { useState } from "react";
import axios from "../api/axios";
import useAuthContext from "../context/AuthContext";
import "./Login.css"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const { csrf } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
      const response = await axios.post("/forgot-password", { email });
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
          <div className="login_box">
            <div className="">
              {status && (
                <div className="bg-green-700 m-2 p-2 rounded text-white">
                  {status}
                </div>
              )}
              <div className="login_title_forget">
                忘記密碼?
                <br />
                請輸入信箱，我們將向您發送重設密碼之連結。
              </div>
              <form className="login_form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="login_input_box"
                  />
                  {errors.email && (
                    <div className="flex">
                      <small className="login_error">
                        找不到使用者信箱，請重新輸入。
                      </small>
                    </div>
                  )}
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="login_btn"
                  >
                    送出
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
