import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Signup.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Login failed");
        setLoading(false);
        return;
      }


      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 800);

    } catch (err) {
      toast.error(
        "Cannot connect to server. Is the backend running?"
      );

      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* LEFT */}
        <div className="login-left">

          <div className="mausam-logo">
            ☁
          </div>

          <h1>MAUSAM</h1>

          <h2>
            Your weather,
            <br />
            <span>your way.</span>
          </h2>

          <p>
            Get personalized weather forecasts, alerts and
            insights designed specially for you.
          </p>

          <div className="login-benefit">
            <div>✓</div>
            <span>Personalized weather experience</span>
          </div>

          <div className="login-benefit">
            <div>✓</div>
            <span>Smart weather alerts</span>
          </div>

          <div className="login-benefit">
            <div>✓</div>
            <span>Save your favorite locations</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="login-right">

          <div className="login-form-container">

            <h3>Welcome back!</h3>

            <p className="login-subtitle">
              Login to continue to your Mausam dashboard.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                />

              </div>

              <div className="form-group">

                <label>Password</label>

                <div className="password-box">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    disabled={loading}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    disabled={loading}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              <div className="login-options">

                <label>
                  <input
                    type="checkbox"
                    disabled={loading}
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  disabled={loading}
                >
                  Forgot password?
                </button>

              </div>

              <button
                type="submit"
                className="login-button"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <p className="signup-text">
              Don't have an account?
              <Link to="/signup">
                {" "}Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;