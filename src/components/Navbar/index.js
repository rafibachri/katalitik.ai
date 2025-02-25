import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaBell } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdList } from "react-icons/io";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GoSidebarCollapse } from "react-icons/go";
import { PiNotePencilFill } from "react-icons/pi";
import { Tooltip } from "react-tippy";
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("1.5 Flash");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
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
        <Tooltip title={showMenu ? "Close Menu" : "Open Menu"} position="bottom" trigger="mouseenter" delay={[0, 0]}>
          <a className={`sidemenu-opener ${showMenu ? "" : "hidden"}`} onClick={toogleMenu}>
            <GoSidebarCollapse style={{ fontSize: "23px" }} />
          </a>
        </Tooltip>
        {/* New Note */}
        <Tooltip title="New Chat" position="bottom" trigger="mouseenter" delay={[0, 0]}>
          <a className="sidemenu-opener" onClick={() => navigate("/home")}>
            <PiNotePencilFill style={{ fontSize: "23px" }} />
          </a>
        </Tooltip>
        <div className="navbar-brand">
          {/* <div className="d-flex flex-row justify-content-between">
            <img className="mr-2" src="/assets/images/katalitik-logo-4.png" alt="user-avatar" />
            <MdKeyboardArrowDown style={{color:"#8E8E93", marginLeft:'6px'}}/>
          </div>
          <div className="navbar-brand-text">1.5 Flash</div> */}
          <div className="d-flex flex-row justify-content-between">
            <img className="mr-2" src="/assets/images/katalitik-logo-4.png" alt="user-avatar" onClick={() => navigate("/home")} />
            {isOpen ? (
              <MdKeyboardArrowUp style={{ color: "#8E8E93", marginLeft: '6px' }} onClick={togglePopup} />
            ) : (
              <MdKeyboardArrowDown style={{ color: "#8E8E93", marginLeft: '6px' }} onClick={togglePopup} />
            )}
          </div>
          <div className="navbar-brand-text">{selectedOption}</div>
        </div>
        {isOpen && (
          <div className="popup-menu">
            <div className="popup-container" onClick={() => handleOptionClick("1.5 Flash")}>
              <div className="popup-title">1.5 Flash</div>
              <div className="popup-item">For daily assistants</div>
            </div>
            <div className="popup-container" onClick={() => handleOptionClick("2.0 Daily Flash Experimental")}>
              <div className="popup-title">2.0 Flash (Experimental)</div>
              <div className="popup-item"> For smartest model and more</div>
            </div>
            <div className="popup-item2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row" onClick={() => handleOptionClick("ChatAi Advanced")}>
                  <img src="assets/images/katalitik-logo-2.png" className="sidebar-icon" />
                  <div>ChatAi Advanced</div>
                </div>
                <div className="upgrade-btn1 ml-4">
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
