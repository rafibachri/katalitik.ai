import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../../components/Alert";
import { company } from "../../utility/config";

const Login = ({ login }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // customer: company,
    email: "",
    password: "",
    code: "",
  });

  const { customer, email, password, code } = formData;
  const [loading, setLoading] = useState(false);
  const [textPosition, setTextPosition] = useState(0);
  const [isTextFullyDisplayed, setIsTextFullyDisplayed] = useState(false);

  useEffect(() => {
    if (textPosition < runningText.length) {
      const intervalId = setInterval(() => {
        setTextPosition((prevPosition) => prevPosition + 1);
      }, 100);
      return () => clearInterval(intervalId);
    } else {
      setIsTextFullyDisplayed(true);
    }
  }, [textPosition]);

  const runningText = "Selamat Datang, di ";
  const displayedText = runningText.slice(0, textPosition);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    login({ email, password, code })
      .then(() => {
        navigate("/home");
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  return (
    <div className="login d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="row  justify-content-center">
        {/* Logo Column */}
        {/* <div className="col-lg-6 col-md-8 text-center mb-4 mb-lg-0">
          <img src="/assets/images/katalitik-logo-2.png" alt="Header" style={{ maxWidth: "60%", marginBottom: "30px" }} />
        </div> */}

        {/* Form Column */}
        {/* <div className="col-lg-6 col-md-8 d-flex align-items-center justify-content-center mt-4" style={{ background: "linear-gradient(to right, #0074d9, #001f3f)", color: "#fff", borderRadius: "10px", padding: "10px", marginBottom: "100px" }}> */}
        <div className="login-card">
          <div className="d-flex flex-row">
            <img src="/assets/images/katalitik-logo-1.png" alt="Header" className="katalitik-logo" />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="login-title mt-3">Log In</div>
          </div>
          <Alert />
          <form method="post" className="login-form" onSubmit={(e) => onSubmit(e)}>
            {/* {(company === undefined || company === null || company === "") && (
              <div className="form-group">
                <input
                  className="form-control"
                  type="customer"
                  name="customer"
                  value={customer}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter your customer code"
                  required
                />
              </div>
            )} */}
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan Email Anda"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan Password Anda"
                required
              />
            </div>
            <div className="d-flex flex-row justify-content-between" style={{ gap: "15px" }}>
              <div className="form-group w-100">
                <input
                  className="form-control"
                  type="code"
                  name="code"
                  value={code}
                  onChange={(e) => onChange(e)}
                  placeholder="Masukkan Kode"
                  required
                />
              </div>
              <div className="form-group w-50">
                <input
                  className="form-control"
                  type="code"
                  name="code"
                  value={"QWERTYU123"}
                  onChange={(e) => onChange(e)}
                  placeholder="QWERTYU123"
                  required
                />
              </div>
            </div>
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <button type="submit" className="btn btn-block" style={{ padding: "8px 24px", color: "#fff", background: "linear-gradient(180deg, #F7002C 0%, #861914 100%)", fontSize: "16px", fontWeight: "600", borderRadius: "6px" }}>
                Log In
              </button>
            )}
            <button type="submit" className="btn btn-block" style={{ padding: "8px 24px", color: "#f7002c", fontSize: "16px", fontWeight: "600", borderRadius: "6px", background: "none", border: "1.5px solid var(--Katalitik-Linear, #F7002C)" }}>
              Log In dengan cara lain
            </button>
            <div className="d-flex justify-content-between w-100 mb-2 mt-2">
              <div className="d-flex flex-row">
                <input type="checkbox" name="remember" value="remember" placeholder="remember me"/>
                <div className="ml-2">Remember me</div>
              </div>
              <a style={{ color: "#f7002c", textDecoration: "nones" }} href="" target="_blank" rel="noopener noreferrer">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
