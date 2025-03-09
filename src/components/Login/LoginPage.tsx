import "./LoginPage.css";
import login_img from "../../assets/login_img.jpg";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="jp__login_page__container">
      <div className="jp__login_page">
        <h1>Morgan Placements</h1>
        <h2>Welcome Back, Please Login</h2>
        <div className="jp__login_page__content">
          <form className="jp__login_page__content__form">
            <h3>Login</h3>
            <div>
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="jp__login_page__email-input">
              <input
                type="text"
                placeholder="your@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div className="jp__login_page__password-input">
              <input
                type="password"
                placeholder="Enter 6 character or more"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="jp__login_page__login-button">
              <button type="submit" onClick={(e) => handleLogin(e)}>
                Login
              </button>
            </div>
          </form>
          <div className="jp__login_page__content__image">
            <img src={login_img} alt="login_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
