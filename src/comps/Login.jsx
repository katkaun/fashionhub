import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/index.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/v1/fashionhub/users/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: userName,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLoginMessage(
          "Welcome " + userName + "! Redirecting to the store..."
        );
        setLoggedIn(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else if (response.status === 400) {
        setLoggedIn(false),
          setLoginMessage("Username or password is incorrect!");
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container p-5 rounded bg-white shadow-sm mb-4">
        <h3 className="text-center">Sign in</h3>
        {loginMessage && (
          <p className={`mb-2 ${loggedIn ? "text-success" : "text-danger"}`}>
            {loginMessage}
          </p>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="Email"
              value={userName}
              onChange={handleUserNameChange}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-end mt-2">
            <Link to="/registration">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
