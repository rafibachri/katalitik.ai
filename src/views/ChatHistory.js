import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, Row, Col, Alert, Button, Pagination, Table } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { FaUsers, FaCheckCircle, FaClock, FaBuilding, FaFilter, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import 'rc-calendar/assets/index.css';
import "../styles.css"
import axios from "axios";
import { BsPersonWorkspace, BsArrowUpCircleFill, BsArrowDownCircleFill, BsFillEyeFill, BsArrowClockwise, BsPeopleFill, BsDiagram3, BsTags, BsYoutube, BsBoxes } from "react-icons/bs";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css"
import { ArrowClockwise, ArrowLeftCircle, ArrowRightCircle, ArrowDown, ArrowDownCircleFill, ArrowUp, ArrowUpCircleFill, BarChartFill, GraphUpArrow, Clock, Dot, Calendar2DateFill, Calendar2Fill, Activity, GraphDownArrow, Wechat, PeopleFill, Fire, Person, PersonFill, CheckCircleFill, Soundwave, Speaker, Megaphone, } from "react-bootstrap-icons";
import { MdOutlineSend, MdAutorenew, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp, MdPerson } from "react-icons/md";
import { LuPackageOpen, LuThumbsUp } from "react-icons/lu";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { VscSend } from "react-icons/vsc";
import { PiArrowsClockwiseBold, PiSpeakerHifi, PiSpeakerHigh, PiThumbsDownDuotone } from "react-icons/pi";
import { BiBarChart, BiComment, BiCommentDetail, BiExport, BiMoney, BiNotepad } from "react-icons/bi";
import ReactApexChart from "react-apexcharts";
import ReactECharts from 'echarts-for-react';
import { Tooltip } from "react-tippy";


const ChatHistory = ({ dashboard }) => {
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(false);
    const [selectedPercentage, setSelectedPercentage] = useState(null);
    const chartRef = useRef(null);
    const [activeToggle, setActiveToggle] = useState("Channel");
    const [activeToggleSummary, setActiveToggleSummary] = useState("Sarana");
    const [selectedDate, setSelectedDate] = useState(null);
    const [inputText, setInputText] = useState("");
    const maxWords = 3000;

    const countChars = (text) => text.length;

    const handleInputChange = (e) => {
        const text = e.target.value;
        if (countChars(text) <= maxWords) {
            setInputText(text);
        }
    };
    const handleToggle = (toggle) => {
        setActiveToggle(toggle);
    };
    const handleToggleSummary = (toggleSummary) => {
        setActiveToggleSummary(toggleSummary);
    };

    const handleFilter = (e) => {
        e.preventDefault();
        setFilter(!filter);
    };

    const onChangeDate = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            {/* Page Content */}
            <div className="home-container">
                {/* Main Content */}
                <div className="chat-history-content">
                    <div className="chat-me-box">
                        <div className="chat-me">Summary Today Procurement</div>
                    </div>
                    <div className="chat-response-box">
                        <div className="d-flex flex-row">
                            <img className="sidebar-icon" src="/assets/images/katalitik-logo-2.png" alt="user-avatar" />
                            <div className="chat-response-textbox">
                                <div className="chat-response-text">
                                    Pada tanggal 30 Januari 2025, Kementerian Perhubungan (Kemenhub)
                                    mengumumkan hasil prakualifikasi untuk pelelangan mitra kerja sama
                                    konsesi pengusahaan wilayah tertentu di Perairan Sangatta, Kalimantan Timur.
                                    Namun, informasi mengenai nilai pagu anggaran untuk proyek ini tidak tersedia dalam sumber yang ada.
                                    Langkah ini merupakan bagian dari upaya Kemenhub untuk meningkatkan pengelolaan dan pengembangan infrastruktur
                                    transportasi laut di wilayah tersebut. Selain itu, Kemenhub telah menerima tambahan anggaran sebesar Rp6,69 triliun untuk tahun 2025,
                                    sehingga total pagu anggaran menjadi Rp31,45 triliun dari sebelumnya Rp24,76 triliun. Tambahan anggaran ini dialokasikan untuk berbagai
                                    kegiatan strategis, termasuk pengadaan bus, pemasangan perlengkapan jalan, layanan angkutan perintis,
                                    subsidi angkutan motor melalui kereta api, serta pengoperasian dan perawatan prasarana perkeretaapian milik negara.
                                </div>
                                <div className="chat-response-icon">
                                    <div>
                                        <Tooltip title="Listen" position="bottom" trigger="mouseenter" delay={[0, 0]}>
                                            <PiSpeakerHigh size={20} style={{ cursor: "pointer" }} />
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <Tooltip title="Like" position="bottom" trigger="mouseenter" delay={[0, 0]}>
                                            <LuThumbsUp size={20} style={{ cursor: "pointer" }} />
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <Tooltip title="Dislike" position="bottom" trigger="mouseenter" delay={[0, 0]}>
                                            <PiThumbsDownDuotone size={20} style={{ cursor: "pointer" }} />
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <Tooltip title="Copy" position="bottom" trigger="mouseenter" delay={[0, 0]}>
                                            <HiOutlineSquare2Stack size={20} style={{ cursor: "pointer" }} />
                                        </Tooltip >
                                    </div>
                                    <div>
                                        <Tooltip title="Regenerate" position="bottom" trigger="mouseenter" delay={[0, 0]}>
                                            <ArrowClockwise size={20} style={{ cursor: "pointer" }} />
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="katalitik-card-2">
                        <div className="search-box">
                            <div className="d-flex flex-row justify-content-between" style={{ padding: "0px 16px", marginTop: '16px' }}>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder=""
                                    value={inputText}
                                    onChange={handleInputChange}
                                />
                                <div className="search-btn">
                                    <VscSend size={25} />
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

        </div >
    );

};

ChatHistory.propTypes = {
    dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    dashboard: state.dashboard,
});

export default connect(mapStateToProps, {})(ChatHistory);
