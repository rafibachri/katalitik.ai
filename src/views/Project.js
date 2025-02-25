import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Row, Col, Alert, Button, Pagination } from "react-bootstrap";
import { FaUsers, FaCheckCircle, FaClock, FaBuilding, FaFilter, FaThumbsUp, FaDownload, FaRegCalendarAlt } from "react-icons/fa";
import 'rc-calendar/assets/index.css';
import "../styles.css"
import axios from "axios";
import { BsPersonWorkspace, BsArrowUpCircleFill, BsArrowDownCircleFill, BsFillEyeFill, BsArrowClockwise, BsPeopleFill, BsDiagram3, BsTags, BsYoutube, BsBoxes, BsShop } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowClockwise, ArrowLeftCircle, ArrowRightCircle, ArrowDown, ArrowDownCircleFill, ArrowUp, ArrowUpCircleFill, BarChartFill, GraphUpArrow, Clock, Dot, Calendar2DateFill, Calendar2Fill, Activity, GraphDownArrow, Wechat, PeopleFill, Fire, Person, PersonFill, CheckCircleFill, ThreeDots, ThreeDotsVertical, Megaphone, } from "react-bootstrap-icons";
import { MdAutorenew, MdCurrencyExchange, MdInfoOutline, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp, MdLocationOn, MdLocationPin, MdOutlineHourglassEmpty, MdOutlineLocationOn } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { PiArrowsClockwiseBold, PiClockCounterClockwise, PiSpeakerHigh, PiSquaresFour } from "react-icons/pi";
import { BiBarChart, BiComment, BiCommentDetail, BiExport, BiMoney, BiNotepad } from "react-icons/bi";
import { LuPackageCheck, LuPackageSearch } from "react-icons/lu";
import { TbPodium } from "react-icons/tb";

const Project = ({ dashboard }) => {
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(false);
    const [selectedPercentage, setSelectedPercentage] = useState(null);
    const [filterModal, setFilterModal] = useState(false);
    const [projectModal, setProjectModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const [selectedKLPD, setSelectedKLPD] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);

    const handleSelectChangeKLPD = (e) => {
        const value = e.target.value;
        if (value && !selectedKLPD.includes(value)) {
            setSelectedKLPD([...selectedKLPD, value]);
        }
    };

    const handleSelectChangeLocation = (e) => {
        const value = e.target.value;
        if (value && !selectedLocation.includes(value)) {
            setSelectedLocation([...selectedLocation, value]);
        }
    };

    const handleRemove = (value) => {
        setSelectedKLPD(selectedKLPD.filter(item => item !== value));
        setSelectedLocation(selectedLocation.filter(item => item !== value));
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [goToPage, setGoToPage] = useState("");

    const projects = [...Array(49)];
    const itemsPerPage = 4;
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleGoToPage = () => {
        const pageNumber = parseInt(goToPage, 10);
        if (!isNaN(pageNumber)) {
            paginate(pageNumber);
        }
        setGoToPage("");
    };

    const handleFilter = (e) => {
        e.preventDefault();
        setFilter(!filter);
    };
    const handleSelectFilter = (filterType) => {
        setSelectedFilter(filterType);
    };
    useEffect(() => {
        console.log("Selected Filter:", selectedFilter);
    }, [selectedFilter]);

    const toggleFilter = (filter) => {
        setSelectedFilters((prevFilters) => {
            if (prevFilters.includes(filter)) {
                // Jika sudah dipilih, hapus dari array
                return prevFilters.filter((item) => item !== filter);
            } else {
                // Jika belum dipilih, tambahkan ke array
                return [...prevFilters, filter];
            }
        });
    };
    const onChangeDate = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            {/* Page Content */}
            <div className="page-content">
                <div className="dashboard-header">
                    <h2>Project</h2>
                    <p>Find procurement packages project from ministries and institutions across Indonesia.
                        Easily search and filter by institution, location, procurement type, fund and date.</p>
                    <div className="filter-container">
                        <button className="filter-btn1" onClick={() => setFilterModal(true)}>Filter <MdKeyboardArrowDown /></button>
                        <div className="search-container">
                            <input type="text" placeholder="Search..." className="form-control" />
                        </div>
                        <button className="dl-btn"><FaDownload style={{ color: "white" }} /></button>
                    </div>
                    <div className="dashboard-last-update">Last Update 21 Januari 2025 01:47 WIB</div>
                </div>
                <div className="project-content">
                    {currentProjects.map((_, index) => (
                        <div className="project-cards" key={index}>
                            <div className="project-id">ID: 52198757</div>
                            <div className="d-flex flex-row">
                                <ThreeDotsVertical size={20} style={{
                                    marginTop: "4px", marginLeft: "9px", color: "#861914", cursor: "pointer", top: 10,
                                    right: 10, position: "absolute"
                                }} onClick={() => {
                                    setSelectedProject(index);
                                    setProjectModal(true);
                                }} />
                            </div>
                            <div className="d-flex flex-row justify-content-between mt-3">
                                <div className="d-flex flex-row align-items-center">
                                    <img src="/assets/images/image-15.png" />
                                    <div className="project-title d-flex flex-column ml-2">
                                        <div>Dinas Kepemudaan, Olahraga dan Pariwisata</div>
                                        <h6 >Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Komputer</h6>
                                    </div>
                                </div>
                            </div>
                            <div>Rp. 60.000.000</div>
                            <div className="d-flex flex-row align-items-center" style={{ gap: "6px" }}>
                                <Megaphone />
                                <div className="project-category">Announcement:</div>
                                <div className="project-category">Agustus 2024</div>
                                <Dot />
                                <MdOutlineHourglassEmpty />
                                <div className="project-category">Periode:</div>
                                <div className="project-category">Januari 2025 - Desember 2025</div>
                            </div>
                            <div className="d-flex flex-row " style={{ gap: "16px" }}>
                                <div className="project-tag"><PiSquaresFour />Jenis Pengadaan: Barang</div>
                                <div className="project-tag"><LuPackageCheck />Jenis Produk: Dalam Negeri</div>
                                <div className="project-tag"><BsShop />Jenis Usaha: Bukan Usaha Kecil/Koperasi</div>
                                <div className="project-tag"><TbPodium />Jenis Metode: Pengadaan Langsung</div>
                            </div>
                            <div className="d-flex flex-row align-items-center" style={{ gap: "4px" }}>
                                <MdOutlineLocationOn />
                                <div className="project-category">Kabupaten Tegal, Provinsi Jawa Tengah</div>
                            </div>
                        </div>
                    ))}
                    <div className="project-pagination">
                        <div onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} style={{ cursor: "pointer" }}>
                            <MdKeyboardArrowLeft />
                        </div>
                        {[...Array(totalPages)].map((_, index) => (
                            <div key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? "active" : ""} style={{ cursor: "pointer" }}>
                                {index + 1}
                            </div>
                        ))}
                        <div onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} style={{ cursor: "pointer" }}>
                            <MdKeyboardArrowRight />
                        </div>
                        <div className="go-to-page">
                            <span>Go to:</span>
                            <input
                                type="number"
                                min="1"
                                max={totalPages}
                                value={goToPage}
                                onChange={(e) => setGoToPage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleGoToPage()}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Filter Modal */}
            <Modal show={filterModal} onHide={() => setFilterModal(false)}>
                <div className="filter-modal">
                    <div className="filter-header">
                        <div>Filter Projects</div>
                    </div>
                    <div className="filter-sub">
                        <p>See results in your view based on the filters you select here.</p>
                    </div>
                    <div className="filter-container">
                        <div className="filter-card-container">
                            <div className="filter-options" onClick={() => handleSelectFilter("klpd")}>
                                <div className="d-flex flex-row">
                                    <div className="d-flex align-items-center mr-2"><RiGovernmentLine style={{ color: "#861914" }} /></div>
                                    <div>K/L/PD</div>
                                </div>
                                <MdKeyboardArrowRight />
                            </div>

                            <div className="filter-options" onClick={() => handleSelectFilter("produkDalamNegeri")}>
                                <div className="d-flex flex-row">
                                    <div className="d-flex align-items-center mr-2"><MdCurrencyExchange style={{ color: "#861914" }} /></div>
                                    <div>Produk Dalam Negeri</div>
                                </div>
                                <MdKeyboardArrowRight />
                            </div>
                            <div className="filter-options" onClick={() => handleSelectFilter("usahaKecil")}>
                                <div className="d-flex flex-row">
                                    <div className="d-flex align-items-center mr-2"><BsBoxes style={{ color: "#861914" }} /></div>
                                    <div>Usaha Kecil/Koperasi</div>
                                </div>
                                <MdKeyboardArrowRight />
                            </div>
                            <div className="filter-options" onClick={() => handleSelectFilter("lokasi")}>
                                <div className="d-flex flex-row">
                                    <div className="d-flex align-items-center mr-2"><MdOutlineLocationOn style={{ color: "#861914" }} /></div>
                                    <div>Lokasi</div>
                                </div>
                                <MdKeyboardArrowRight />
                            </div>

                            <div className="filter-options">
                                <div className="d-flex flex-row" onClick={() => handleSelectFilter("jenis")}>
                                    <div className="d-flex align-items-center mr-2"><LuPackageSearch style={{ color: "#861914" }} /></div>
                                    <div>Jenis Pengadaan</div>
                                </div>
                                <MdKeyboardArrowRight />
                            </div>
                            <div className="filter-options" onClick={() => handleSelectFilter("metode")}>
                                <div className="d-flex flex-row">
                                    <div className="d-flex align-items-center mr-2"><LuPackageCheck style={{ color: "#861914" }} /></div>
                                    <div>Metode Pemilihan</div>
                                </div>
                                <MdKeyboardArrowRight />
                            </div>
                            <div className="filter-options" onClick={() => handleSelectFilter("pagu")}>
                                <div className="d-flex flex-row">
                                    <div className="d-flex align-items-center mr-2"><BiMoney style={{ color: "#861914" }} /></div>
                                    <div>Pagu</div>
                                </div>
                                <MdKeyboardArrowRight />
                            </div>
                            <div className="filter-options" onClick={() => handleSelectFilter("tanggal")}>
                                <div className="d-flex flex-row">
                                    <div className="d-flex align-items-center mr-2"><FaRegCalendarAlt style={{ color: "#861914" }} /></div>
                                    <div>Tanggal</div>
                                </div>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <div className="filter-card-container">
                            {selectedFilter === "klpd" && (
                                <div className="w-100">
                                    <div className="d-flex flex-row mb-2">
                                        <div className="d-flex align-items-center mr-2"><RiGovernmentLine style={{ color: "#861914" }} /></div>
                                        <div>K/L/PD</div>
                                    </div>
                                    <div className="filter-text mb-2">Pilih K/L/PD yang sesuai</div>
                                    <select className="filter-dropdown mb-2" onChange={handleSelectChangeKLPD}>
                                        <option value="">Semua K/L/PD</option>
                                        <option value="Kementrian">Kementerian</option>
                                        <option value="Lembaga">Lembaga</option>
                                        <option value="Pemerintah Daerah">Pemerintah Daerah</option>
                                        <option value="DPR">DPR</option>
                                        <option value="MPR">MPR</option>
                                    </select>
                                    <div className="line"></div>
                                    <div className="selected-container">
                                        {selectedKLPD.map((item, index) => (
                                            <div key={index} className="selectedValue">
                                                {item}
                                                <div className="remove-btn" onClick={() => handleRemove(item)}>x</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {selectedFilter === "produkDalamNegeri" && (
                                <div div className="w-100">
                                    <div className="d-flex flex-row mb-2">
                                        <div className="d-flex align-items-center mr-2"><MdCurrencyExchange style={{ color: "#861914" }} /></div>
                                        <div>Produk Dalam Negeri</div>
                                    </div>
                                    <div className="filter-text mb-2">Pilih jenis produk pengadaan yang sesuai</div>
                                    <div className="line mb-2"></div>
                                    <div className="d-flex flex-row justify-content-between equal-buttons" style={{ gap: "8px" }}>
                                        <button
                                            className={`btn ${selectedFilters.includes("Produk Dalam Negeri") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Produk Dalam Negeri")}
                                        >
                                            Produk Dalam Negeri
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Produk Impor") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Produk Impor")}
                                        >
                                            Produk Impor
                                        </button>
                                    </div>
                                </div>
                            )}
                            {selectedFilter === "usahaKecil" && (
                                <div div className="w-100">
                                    <div className="d-flex flex-row mb-2">
                                        <div className="d-flex align-items-center mr-2"><BsBoxes style={{ color: "#861914" }} /></div>
                                        <div>Usaha Kecil/Koperasi</div>
                                    </div>
                                    <div className="filter-text mb-2">Pilih jenis usaha yang sesuai</div>
                                    <div className="line mb-2"></div>
                                    <div className="d-flex flex-column justify-content-between equal-buttons" style={{ gap: "8px" }}>
                                        <button
                                            className={`btn ${selectedFilters.includes("Bukan Usaha Kecil/Koperasi") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Bukan Usaha Kecil/Koperasi")}
                                        >
                                            Bukan Usaha Kecil/Koperasi
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Usaha Kecil/Koperasi") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Usaha Kecil/Koperasi")}
                                        >
                                            Usaha Kecil/Koperasi
                                        </button>
                                    </div>
                                </div>
                            )}
                            {selectedFilter === "lokasi" && (
                                <div className="w-100">
                                    <div className="d-flex flex-row mb-2">
                                        <div className="d-flex align-items-center mr-2"><MdOutlineLocationOn style={{ color: "#861914" }} /></div>
                                        <div>Lokasi</div>
                                    </div>
                                    <div className="filter-text mb-2">Pilih Lokasi yang sesuai</div>
                                    <select className="filter-dropdown mb-2"  onChange={handleSelectChangeLocation}>
                                        <option value="">Semua Lokasi</option>
                                        <option value="Aceh Barat">Aceh Barat</option>
                                        <option value="Tangerang">Tangerang</option>
                                        <option value="DKI Jakarta">DKI Jakarta</option>
                                        <option value="Surabaya">Surabaya</option>
                                    </select>
                                    <div className="line"></div>
                                    <div className="selected-container">
                                        {selectedLocation.map((item, index) => (
                                            <div key={index} className="selectedValue">
                                                {item}
                                                <div className="remove-btn" onClick={() => handleRemove(item)}>X</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {selectedFilter === "jenis" && (
                                <div div className="w-100">
                                    <div className="d-flex flex-row mb-2">
                                        <div className="d-flex align-items-center mr-2"><LuPackageSearch style={{ color: "#861914" }} /></div>
                                        <div>Jenis Pengadaan</div>
                                    </div>
                                    <div className="filter-text mb-2">Pilih jenis usaha yang sesuai</div>
                                    <div className="line mb-2"></div>
                                    <div className="d-flex flex-column justify-content-between equal-buttons" style={{ gap: "8px" }}>
                                        <button
                                            className={`btn ${selectedFilters.includes("Barang") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Barang")}
                                        >
                                            Barang
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Jasa Konsultasi") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Jasa Konsultasi")}
                                        >
                                            Jasa Konsultasi
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Jasa Lainnya") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Jasa Lainnya")}
                                        >
                                            Jasa Lainnya
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Pekerjaan Konstruksi") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Pekerjaan Konstruksi")}
                                        >
                                            Pekerjaan Konstruksi
                                        </button>
                                    </div>
                                </div>
                            )}
                            {selectedFilter === "metode" && (
                                <div div className="w-100">
                                    <div className="d-flex flex-row mb-2">
                                        <div className="d-flex align-items-center mr-2"><LuPackageCheck style={{ color: "#861914" }} /></div>
                                        <div>Metode Pemilihan</div>
                                    </div>
                                    <div className="filter-text mb-2">Pilih metode pengadaan yang sesuai</div>
                                    <div className="line mb-2"></div>
                                    <div className="d-flex flex-column justify-content-between equal-buttons" style={{ gap: "8px" }}>
                                        <button
                                            className={`btn ${selectedFilters.includes("E-Purchasing") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("E-Purchasing")}
                                        >
                                            E-Purchasing
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Kontes") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Kontes")}
                                        >
                                            Kontes
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Pengadaan Langsung") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Pengadaan Langsung")}
                                        >
                                            Pengadaan Langsung
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Penunjukan Langsung") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Penunjukan Langsung")}
                                        >
                                            Penunjukan Langsung
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Sayembara") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Sayembara")}
                                        >
                                            Sayembara
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Seleksi") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Seleksi")}
                                        >
                                            Seleksi
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Tender") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Tender")}
                                        >
                                            Tender
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Tender Cepat") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Tender Cepat")}
                                        >
                                            Tender Cepat
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Pembayaran untuk Kontrak Tahun Jamak") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Pembayaran untuk Kontrak Tahun Jamak")}
                                        >
                                            Pembayaran untuk Kontrak Tahun Jamak
                                        </button>
                                    </div>
                                </div>
                            )}
                            {selectedFilter === "pagu" && (
                                <div className="w-100">
                                    <div className="d-flex flex-row mb-2">
                                        <div className="d-flex align-items-center mr-2">
                                            <BiMoney style={{ color: "#861914" }} />
                                        </div>
                                        <div>Pagu</div>
                                    </div>
                                    <div className="filter-text mb-2">Masukkan pagu yang sesuai</div>
                                    <div className="line mb-2"></div>

                                    {/* Tambahkan input range kanan dan kiri */}
                                    <div className="d-flex flex-row justify-content-between">
                                        <input type="text" className="form-control" placeholder="Min Rp" />
                                        <div className="d-flex align-items-center ml-2 mr-2">-</div>
                                        <input type="text" className="form-control" placeholder="Max Rp" />
                                    </div>
                                    <div className="filter-text mt-2">Atau pilih rentang pagu berikut</div>
                                    <div className="d-flex flex-column justify-content-between" style={{ gap: "8px", marginTop: "10px" }}>
                                        <div className="d-flex flex-row justify-content-between equal-buttons">
                                            <button
                                                className={`btn ${selectedFilters.includes("Rp 0 - Rp100 jt") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Rp 0 - Rp100 jt")}
                                            >
                                                Rp0 - Rp100 jt
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("Rp100 jt - Rp500 jt") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Rp100 jt - Rp500 jt")}
                                            >
                                                Rp100 jt - Rp500 jt
                                            </button>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between equal-buttons">
                                            <button
                                                className={`btn ${selectedFilters.includes("Rp500 jt - Rp1M") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Rp500 jt - Rp1M")}
                                            >
                                                Rp500 jt - Rp1M
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("> Rp1M") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("> Rp1M")}
                                            >
                                                {">"} Rp1M
                                            </button>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between equal-buttons">
                                            <button
                                                className={`btn ${selectedFilters.includes("> Rp1.5M") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("> Rp1.5M")}
                                            >
                                                {">"} Rp1.5M
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("> Rp15M") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("> Rp15M")}
                                            >
                                                {">"} Rp15M
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedFilter === "tanggal" && (
                                <div className="w-100">
                                    <div className="d-flex flex-row mb-2">
                                        <div className="d-flex align-items-center mr-2"><FaRegCalendarAlt style={{ color: "#861914" }} /></div>
                                        <div>Tanggal</div>
                                    </div>
                                    <div className="filter-text mb-2">Pilih jenis tanggal pengadaan yang sesuai</div>
                                    <div className="d-flex flex-column justify-content-between equal-buttons mb-2" style={{ gap: "8px" }}>
                                        <button
                                            className={`btn ${selectedFilters.includes("Tanggal Pemilihan Penyedia") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Tanggal Pemilihan Penyedia")}
                                        >
                                            Tanggal Pemilihan Penyedia
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Kontes") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Kontes")}
                                        >
                                            Kontes
                                        </button>
                                        <button
                                            className={`btn ${selectedFilters.includes("Pengadaan Langsung") ? "selected" : ""}`}
                                            onClick={() => toggleFilter("Pengadaan Langsung")}
                                        >
                                            Pengadaan Langsung
                                        </button>
                                    </div>
                                    <div className="filter-text mb-2">Pilih rentang tanggal pengadaan yang sesuai</div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <input type="date" class="form-control" id="tanggalAwal" />
                                        <div className="d-flex align-items-center ml-2 mr-2">-</div>
                                        <input type="date" class="form-control" id="tanggalAkhir" />
                                    </div>
                                    <div className="line mt-2"></div>
                                    <div className="filter-text mt-2">Atau pilih bulan berikut</div>
                                    <div className="d-flex flex-column justify-content-between" style={{ gap: "12px", marginTop: "10px" }}>
                                        <div className="d-flex flex-row justify-content-between equal-buttons">
                                            <button
                                                className={`btn ${selectedFilters.includes("Januari") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Januari")}
                                            >
                                                Januari
                                            </button>

                                            <button
                                                className={`btn ${selectedFilters.includes("Februari") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Februari")}
                                            >
                                                Februari
                                            </button>

                                            <button
                                                className={`btn ${selectedFilters.includes("Maret") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Maret")}
                                            >
                                                Maret
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("April") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("April")}
                                            >
                                                April
                                            </button>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between equal-buttons">
                                            <button
                                                className={`btn ${selectedFilters.includes("Mei") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Mei")}
                                            >
                                                Mei
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("Juni") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Juni")}
                                            >
                                                Juni
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("Juli") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Juli")}
                                            >
                                                Juli
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("Agustus") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Agustus")}
                                            >
                                                Agustus
                                            </button>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between equal-buttons">
                                            <button
                                                className={`btn ${selectedFilters.includes("September") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("September")}
                                            >
                                                September
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("Oktober") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Oktober")}
                                            >
                                                Oktober
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("November") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("November")}
                                            >
                                                November
                                            </button>
                                            <button
                                                className={`btn ${selectedFilters.includes("Desember") ? "selected" : ""}`}
                                                onClick={() => toggleFilter("Desember")}
                                            >
                                                Desember
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="filter-footer">
                        <div className="d-flex flex-row align-items-center">
                            <div>Results: 2,240</div>
                            <div className="d-flex ml-2"><MdInfoOutline style={{ color: "#861914" }} /></div>
                        </div>
                        <div className="filter-btn-container">
                            <button className="filter-btn-cancel" onClick={() => setFilterModal(false)}>Close</button>
                            <button className="filter-btn-sub">Apply Filter</button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Project Details Modal */}
            <Modal show={projectModal} onHide={() => setProjectModal(false)}>
                <div className="project-detail-modal">
                    <div className="project-detail-header">
                        <div>Detail Paket</div>
                    </div>
                    <div className="project-detail-modal-body">
                        {/* <div className="d-flex flex-row ">
                            <p>Kode RUP</p>
                            <div className="d-flex align-items-start">
                                <p>{selectedProject}</p>
                            </div>
                        </div> */}
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Kode RUP</div>
                            <p>{selectedProject}</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Nama Paket</div>
                            <p>Belanja Bahan Bimtek SPSE</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Nama K/L/PD</div>
                            <p>Kementerian Pertahanan</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Satuan Kerja</div>
                            <p>BALITBANG KEMHAN</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Tahun Anggaran</div>
                            <p>2025</p>
                        </div>
                        <div className="table-container col-12 mb-2">
                            <div className="col-3">Lokasi Pekerjaan</div>
                            <table className="custom-table-project">
                                <thead className="custom-table-project-head">
                                    <tr>
                                        <th>No</th>
                                        <th>Provinsi</th>
                                        <th>Kabupaten/Kota</th>
                                        <th>Detail Lokasi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jawa Barat</td>
                                        <td>Bandung</td>
                                        <td>Jl. Dipatiukur No. 123</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>DKI Jakarta</td>
                                        <td>Jakarta Pusat</td>
                                        <td>Jl. Medan Merdeka Barat</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Volume Pekerjaan</div>
                            <p>1 Paket</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Uraian Pekerjaan</div>
                            <p>1. Snack Pelaksanaan (Bimtek SPSE)
                                ( 50, OK, @ 24000 ); 2. Makan Pelaksanaan (Bimtek SPSE)
                                ( 50, OK, @ 57000 ); 3. Souvenir Kit (Bimtek SPSE) ( 50, PAKET, @ 414000 );
                                4. Spanduk (Bimtek SPSE) ( 2, Buah, @ 500000 ); 5. Plakat (Bimtek SPSE) ( 3, Buah, @ 500000 );
                                6. Dokumentasi (Bimtek SPSE) ( 1, Giat, @ 1000000 ); 7. Snack Rapat Persiapan (Bimtek SPSE) ( 40, OK, @ 24000 );
                                8. Buku Panduan (Bimtek SPSE) ( 50, PAKET, @ 20000 ); 9. Belanja ATK (Bimtek SPSE) ( 1, PAKET, @ 5160000 );
                                10. Cetak laporan (Bimtek SPSE) ( 10, BUKU, @ 100000 );</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Spesifikasi Pekerjaan</div>
                            <p>Belanja barang melalui e-purchasing</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Produk Dalam Negeri</div>
                            <p>Ya</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Usaha Kecil/Koperasi</div>
                            <p>Ya</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Pra DIPA / DPA</div>
                            <p>Ya</p>
                        </div>
                        <div className="table-container col-12 mb-2">
                            <div className="col-3">Sumber Dana</div>
                            <table className="custom-table-project">
                                <thead className="custom-table-project-head">
                                    <tr>
                                        <th>No</th>
                                        <th>Provinsi</th>
                                        <th>Kabupaten/Kota</th>
                                        <th>Detail Lokasi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jawa Barat</td>
                                        <td>Bandung</td>
                                        <td>Jl. Dipatiukur No. 123</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>DKI Jakarta</td>
                                        <td>Jakarta Pusat</td>
                                        <td>Jl. Medan Merdeka Barat</td>
                                    </tr>
                                </tbody>
                                <tfoot className="custom-table-project-foot">
                                    <tr>
                                        <td colSpan="4">
                                            <div className="footer-content">
                                                <span>Total Pagu</span>
                                                <span>Rp. 36.370.000</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Total Pagu</div>
                            <p>Rp. 36.370.000</p>
                        </div>
                        <div className="d-flex flex-row col-12 ">
                            <div className="d-flex flex-row col-3 ">Metode Pemilihan</div>
                            <p>E-Purchasing</p>
                        </div>
                        <div className="table-container col-12">
                            <div className="col-3">Pemanfaatan Barang/Jasa</div>
                            <table className="custom-table-project">
                                <thead className="custom-table-project-head">
                                    <tr>
                                        <th>Mulai</th>
                                        <th>Akhir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1 Januari 2024</td>
                                        <td>1 Januari 2025</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-container col-12">
                            <div className="col-3">Jadwal Pelaksanaan Kontrak</div>
                            <table className="custom-table-project">
                                <thead className="custom-table-project-head">
                                    <tr>
                                        <th>Mulai</th>
                                        <th>Akhir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1 Januari 2024</td>
                                        <td>1 Januari 2025</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-container col-12 mb-2">
                            <div className="d-flex flex-row col-3">Jadwal Pemilihan Penyedia</div>
                            <table className="custom-table-project">
                                <thead className="custom-table-project-head">
                                    <tr>
                                        <th>Mulai</th>
                                        <th>Akhir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1 Januari 2024</td>
                                        <td>1 Januari 2025</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex flex-row col-12">
                            <div className="d-flex flex-row col-3 ">ID Paket Swakelola</div>
                            <p>138712573</p>
                        </div>
                        <div className="d-flex flex-row col-12">
                            <div className="d-flex flex-row col-3 ">Tanggal Umumkan Paket</div>
                            <p>24 Desember 2024 17:23</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="project-modal-footer">
                            <div className="project-btn-container">
                                <button className="project-btn-close" onClick={() => setProjectModal(false)}>Close</button>
                                <button className="project-btn-print">Print</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div >
    );

};

Project.propTypes = {
    dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    dashboard: state.dashboard,
});

export default connect(mapStateToProps, {})(Project);
