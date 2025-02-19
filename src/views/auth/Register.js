import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../../components/Alert";
import { company } from "../../utility/config";

const Register = ({ login }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // customer: company,
    email: "",
    password: "",
    code: "",
  });

  const { customer, email, password, company, usaha, code } = formData;
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
    login({ email, password, company, usaha, code })
      .then(() => {
        navigate("/home");
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  return (
    <div className="register d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="row  justify-content-center">
        {/* Logo Column */}
        {/* <div className="col-lg-6 col-md-8 text-center mb-4 mb-lg-0">
          <img src="/assets/images/katalitik-logo-2.png" alt="Header" style={{ maxWidth: "60%", marginBottom: "30px" }} />
        </div> */}

        {/* Form Column */}
        {/* <div className="col-lg-6 col-md-8 d-flex align-items-center justify-content-center mt-4" style={{ background: "linear-gradient(to right, #0074d9, #001f3f)", color: "#fff", borderRadius: "10px", padding: "10px", marginBottom: "100px" }}> */}
        <div className="register-card">
          <div className="d-flex flex-row">
            <img src="/assets/images/katalitik-logo-1.png" alt="Header" className="katalitik-logo" />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="login-title mt-3">Sign Up</div>
          </div>
          <Alert />
          <form method="post" className="register-form" onSubmit={(e) => onSubmit(e)}>
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
            <div className="form-group">
              <input
                className="form-control"
                type="usaha"
                name="usaha"
                value={usaha}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan Alamat Anda"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="usaha"
                name="usaha"
                value={usaha}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan No. Telepon Anda"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="usaha"
                name="usaha"
                value={usaha}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan Tempat Lahir Anda"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="usaha"
                name="usaha"
                value={usaha}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan Tanggal Lahir Anda"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="usaha"
                name="usaha"
                value={usaha}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan No. KTP Anda"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="usaha"
                name="usaha"
                value={usaha}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan Jenis Usaha Anda"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="company"
                name="company"
                value={company}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan Perusahaan Anda"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="usaha"
                name="usaha"
                value={usaha}
                onChange={(e) => onChange(e)}
                placeholder="Masukkan Jenis Usaha Anda"
                required
              />
            </div>
            {/* <div className="d-flex flex-row justify-content-between" style={{ gap: "15px" }}>
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
                  readOnly
                />
              </div>
            </div> */}
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <button type="submit" className="btn btn-block" style={{ padding: "8px 24px", color: "#fff", background: "linear-gradient(180deg, #F7002C 0%, #861914 100%)", fontSize: "16px", fontWeight: "600", borderRadius: "6px" }}>
                Sign In
              </button>
            )}
            <div className="d-flex justify-content-center">
              <a style={{ color: "#f7002c", textDecoration: "none" }} href="/login" target="_blank" rel="noopener noreferrer">Sudah punya akun? Login disini</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

Register.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Register);
