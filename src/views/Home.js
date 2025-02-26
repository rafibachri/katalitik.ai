import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles.css";
import { BiSearch } from "react-icons/bi";
import { Send, Soundwave } from "react-bootstrap-icons";
import { MdOutlineSend, MdOutlineWavingHand, MdWavingHand } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

const Home = ({ dashboard }) => {
  const [filter, setFilter] = useState(false);
  const [inputText, setInputText] = useState(""); 
  const maxWords = 3000; 

  // const countWords = (text) => {
  //   return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  // };
  const countChars = (text) => text.length;

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (countChars(text) <= maxWords) {
      setInputText(text);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(!filter);
  };

  return (
    <div className="home-container">
      {/* Main Content */}
      <div className="chat-content">
        <div className="katalitik-card">
          <div className="katalitik-card-logo">
            <MdOutlineWavingHand size={70} style={{ color: "white" }} />
          </div>
          <h1 className="welcome-title">
            Welcome to <span style={{ color: "#861914" }}>ChatAi</span>
          </h1>
          <p className="welcome-subtitle">What would you like to know?</p>

          <div className="search-box">
            <div className="d-flex flex-row justify-content-between" style={{padding:"0px 16px", marginTop:'16px'}}>
              <input
                type="text"
                className="search-input"
                placeholder=""
                value={inputText}
                onChange={handleInputChange}
              />
              <div className="search-btn">
                <VscSend size={25}/>
              </div>
            </div>
            {/* <div className="line"></div> */}
            <div className="options">
              <div className="options-2">
                <Soundwave size={20} className="option-btn" />
                <div className="option-btn">Speech-to-text</div>
                {/* <span className="divider">|</span>
                <BiSearch size={20} className="option-btn" />
                <div className="option-btn">Browse</div> */}
              </div>
              {/* Word Counter */}
              <span className="char-count">
                {countChars(inputText)}/{maxWords}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {})(Home);
