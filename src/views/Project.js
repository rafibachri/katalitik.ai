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
                    <p>Find self-managed procurement packages project from ministries and institutions across Indonesia.
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
                                    <select className="filter-dropdown mb-2">
                                        <option value="">Semua K/L/PD</option>
                                        <option value="kementerian">Kementerian</option>
                                        <option value="lembaga">Lembaga</option>
                                        <option value="pemda">Pemerintah Daerah</option>
                                    </select>
                                    <div className="line"></div>
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
                                    <select className="filter-dropdown mb-2">
                                        <option value="">Semua Lokasi</option>
                                        <option value="acehB">Aceh Barat</option>
                                        <option value="tangerang">Tangerang</option>
                                        <option value="dki">DKI Jakarta</option>
                                        <option value="surabaya">Surabaya</option>
                                    </select>
                                    <div className="line"></div>
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
                                        <input type="text" className="form-control" placeholder="Min Rp" />
                                        <div className="d-flex align-items-center ml-2 mr-2">-</div>
                                        <input type="text" className="form-control" placeholder="Max Rp" />
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
                <Modal.Header>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Details for project ID: {selectedProject}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setProjectModal(false)}>Close</Button>
                </Modal.Footer>
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
