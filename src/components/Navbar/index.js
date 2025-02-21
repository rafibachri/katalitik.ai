import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaBell } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdList } from "react-icons/io";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GoSidebarCollapse } from "react-icons/go";
import { PiNotePencilFill } from "react-icons/pi";

import { logout } from "../../actions/auth";
import Profile from "../../views/Profile";
import { useState } from "react";
import Swal from "sweetalert2";
import { ArrowDown } from "react-bootstrap-icons";
import { MdArrowDownward, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = ({ user, logout, toogleMenu, showMenu }) => {
  const [showModal, setShowModal] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const [tooltip, setTooltip] = useState("");
  const [isOpen, setIsOpen] = useState(false);  // State untuk popup
  const [selectedOption, setSelectedOption] = useState("1.5 Flash"); // Default teks navbar

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Ubah teks navbar sesuai pilihan
    setIsOpen(false); // Tutup popup setelah dipilih
  };
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    setProfileModalOpen(true);
    setModalKey((prevKey) => prevKey + 1);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    // Swal.fire({
    //   title: "Apakah anda yakin ingin keluar dari website ini?",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Ya, Keluar",
    //   cancelButtonText: "Tidak",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     logout({ email: user.email }).then(() => {
    navigate("/login");
    //     });
    //   }
    // });
  };


  // const renderUser = () => {
  //   if (user === null) return null;

  //   let gravatar = user.name;
  //   gravatar = gravatar?.replace(/\s+/g, "+").toLowerCase();
  //   gravatar = "https://ui-avatars.com/api/?name=" + gravatar;

  //   return (
  //     <Fragment>
  //       <div className="avatar mx-2 bg-white">
  //         <img className="round" src="/assets/images/user-navbar.png" alt="user-avatar" />
  //       </div>
  //       <div className="user-nav mr-2">
  //         <div className="user-name fw-bolder">{user.name}</div>
  //         <div className="user-status">NIK: {user.nik}</div>
  //       </div>
  //     </Fragment>
  //   );
  // };

  return (
    <nav className={`navbar sticky-top ${isActive ? 'active' : ''}`}> {/* Add active class */}
      <div className="d-flex justify-content-between align-items-center navbar-left">
        <a className={`sidemenu-opener ${showMenu ? "" : "hidden"}`} onMouseEnter={() => setTooltip("sideMenu")} onMouseLeave={() => setTooltip("")} onClick={(e) => { toogleMenu(e); }}>
          <GoSidebarCollapse style={{ fontSize: '23px' }} />
          {tooltip === "Menu" && <span className="tooltip-text">open sidebar</span>}
        </a>
        <a className={`sidemenu-opener`} onMouseEnter={() => setTooltip("newChat")} onMouseLeave={() => setTooltip("")}>
          <PiNotePencilFill style={{ fontSize: '23px' }} onClick={() => navigate("/home")} />
          {tooltip === "Note" && <span className="tooltip-text">new chat</span>}
        </a>
        <Link className="navbar-brand" to="home">
          {/* <div className="d-flex flex-row justify-content-between">
            <img className="mr-2" src="/assets/images/katalitik-logo-4.png" alt="user-avatar" />
            <MdKeyboardArrowDown style={{color:"#8E8E93", marginLeft:'6px'}}/>
          </div>
          <div className="navbar-brand-text">1.5 Flash</div> */}
          <div className="d-flex flex-row justify-content-between" onClick={togglePopup}>
            <img className="mr-2" src="/assets/images/katalitik-logo-4.png" alt="user-avatar" />
            {isOpen ? (
              <MdKeyboardArrowUp style={{ color: "#8E8E93", marginLeft: '6px' }} />
            ) : (
              <MdKeyboardArrowDown style={{ color: "#8E8E93", marginLeft: '6px' }} />
            )}
          </div>
          <div className="navbar-brand-text">{selectedOption}</div>
        </Link>
        {isOpen && (
          <div className="popup-menu">
            <div className="d-flex flex-column" onClick={() => handleOptionClick("1.5 Flash")}>
              <div className="popup-title">1.5 Flash</div>
              <div className="popup-item">For daily assistants</div>
            </div>
            <div className="d-flex flex-column" onClick={() => handleOptionClick("2.0 Daily Flash Experimental")}>
              <div className="popup-title">2.0 Daily Flash Experimental</div>
              <div className="popup-item"> For smartest model and more</div>
            </div>
            <div className="popup-item2" onClick={() => handleOptionClick("ChatAi Advanced")}>
              <div className="d-flex justify-content-between align-items-center">
                <img src="assets/images/katalitik-logo-2.png" className="sidebar-icon" />
                <div>ChatAi Advanced</div>
                <div className="upgrade-btn1">
                  Upgrade
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex align-items-center navbar-right">
        {/* <a className="nav-link user-profile d-flex align-items-center" href="/#" onClick={handleProfileClick}>
          {renderUser()}
        </a>
        {profileModalOpen && (
          <Profile
            key={modalKey}
            showModal={showModal}
            setShowModal={setShowModal}
            setProfileModalOpen={setProfileModalOpen}
          />
        )} */}
        {/* <a className="nav-link logout" href="/#" onClick={(e) => handleLogout(e)}>
          <RiLogoutCircleRLine />
        </a> */}
        <button className="sign-in" onClick={(e) => handleLogout(e)}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
