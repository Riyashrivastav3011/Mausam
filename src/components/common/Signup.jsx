import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CloudSun, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.mobile || !form.password) {
      toast.error("Please fill all the fields.");
      return;
    }

    if (!form.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return;
    }

    if (!agree) {
      toast.error("Please accept the terms and conditions.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            mobile: form.mobile,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      toast.success("Account created successfully!");

      setTimeout(() => {
        navigate("/location");
      }, 800);

    } catch (err) {
      toast.error("Cannot connect to server. Is the backend running?");
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell signup-shell">

        {/* Left Section */}
        <div className="auth-info">

          <div className="auth-logo">
            <CloudSun size={30} />
          </div>

          <span className="auth-brand">MAUSAM</span>

          <h1>
            Weather made
            <br />
            <span>personal.</span>
          </h1>

          <p className="auth-description">
            Create your Mausam account and get weather information
            personalized to your lifestyle.
          </p>

          <div className="signup-points">

            <div>
              <CheckCircle2 size={19} />
              <span>Personalized weather dashboard</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Location-based weather alerts</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Save your favorite locations</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Smart forecasts for your needs</span>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="auth-form-section">

          <div className="auth-form-wrapper">

            <div className="auth-heading">
              <h2>Create account</h2>
              <p>
                Join Mausam and personalize your weather experience.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div className="input-row">

                <div className="input-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

                <div className="input-group">
                  <label>Mobile Number</label>

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="10-digit number"
                    maxLength="10"
                    value={form.mobile}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

              </div>

              <div className="input-group">
                <label>Password</label>

                <div className="password-input">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
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
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>

                </div>
              </div>

              <label className="terms">

                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  disabled={loading}
                />

                <span>
                  I agree to the Terms & Conditions and Privacy Policy.
                </span>

              </label>

              <button
                type="submit"
                className="auth-submit"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <p className="auth-switch">
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;