import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, Row, Col, Alert, Button, Pagination, Table } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { FaUsers, FaCheckCircle, FaClock, FaBuilding, FaFilter, FaThumbsUp, FaTag, FaHandshake, FaRegHandshake } from "react-icons/fa";
import 'rc-calendar/assets/index.css';
import "../styles.css"
import axios from "axios";
import { BsPersonWorkspace, BsArrowUpCircleFill, BsArrowDownCircleFill, BsFillEyeFill, BsArrowClockwise, BsPeopleFill, BsDiagram3, BsTags, BsYoutube, BsBoxes } from "react-icons/bs";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css"
import { ArrowClockwise, ArrowLeftCircle, ArrowRightCircle, ArrowDown, ArrowDownCircleFill, ArrowUp, ArrowUpCircleFill, BarChartFill, GraphUpArrow, Clock, Dot, Calendar2DateFill, Calendar2Fill, Activity, GraphDownArrow, Wechat, PeopleFill, Fire, Person, PersonFill, CheckCircleFill, } from "react-bootstrap-icons";
import { MdAutorenew, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp, MdOutlineDocumentScanner, MdPerson } from "react-icons/md";
import { LuBoxSelect, LuMousePointer, LuPackageOpen, LuSquareDashedBottom, LuSquareDashedBottomCode } from "react-icons/lu";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { BiBarChart, BiComment, BiCommentDetail, BiExport, BiMoney, BiNotepad, BiSolidCoupon, BiTrophy } from "react-icons/bi";
import { FaRegHandPointRight } from "react-icons/fa6";
import { PiGavelBold } from "react-icons/pi";
import ReactApexChart from "react-apexcharts";
import ReactECharts from 'echarts-for-react';
// import indonesiaMap from '@echarts-maps/indonesia';
import IndonesiaMap from "./IndonesiaMap";
import Select2 from "../components/Select2";


const Dashboard = ({ dashboard }) => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(false);
  const [selectedPercentage, setSelectedPercentage] = useState(null);
  const chartRef = useRef(null);
  const [activeToggle, setActiveToggle] = useState("Budget");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleToggle = (toggle) => {
    setActiveToggle(toggle);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(!filter);
  };
  const dateList = [
    { date: "2024-02-01" },
    { date: "2024-02-02" },
    { date: "2024-02-03" },
  ];

  const onChangeDate = (date) => {
    setSelectedDate(date);
  };

  const splineChartData = {
    series: [
      {
        name: "E-Purchasing",
        data: [120, 140, 160, 180, 200, 220, 250, 270, 300, 320, 340, 360],
      },
      {
        name: "Contest",
        data: [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320],
      },
      {
        name: "Selection",
        data: [80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
      },
      {
        name: "Competition",
        data: [20, 50, 120, 40, 160, 50, 200, 80, 240, 100, 280, 300],
      },
      {
        name: "Multi-Year Contract",
        data: [30, 10, 120, 20, 160, 70, 200, 220, 30, 260, 100, 300],
      },
      {
        name: "Direct Procurement",
        data: [80, 20, 120, 90, 40, 180, 40, 220, 40, 260, 20, 190],
      },
      {
        name: "Direct Appointment",
        data: [40, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
      },
      {
        name: "Quick Tender",
        data: [60, 100, 30, 100, 160, 90, 189, 200, 180, 120, 280, 300],
      },
      {
        name: "Tender",
        data: [90, 180, 50, 140, 40, 180, 90, 220, 160, 260, 180, 200],
      },
    ],
    options: {
      chart: {
        type: "line", height: 350, width: "100%",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
        dashArray: 5,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
      },
      colors: ["#861A14", "#EA2E24", "#F47771", "#FFC1BD", "#FFE0DE", "#301D6E", "#4079ED", "#86A9F2", "#B7CEFE"],
    },
  };

  const polarChartData = {
    series: [60, 40],
    options: {
      chart: { type: "polarArea" },
      labels: ["Bukan Usaha Kecil/Koperasi", "Usaha Kecil/Koperasi"],
      colors: ["#861A14", "#F93C65"],
      stroke: { colors: ["#fff"] },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
      },
    },
  };

  const TrendsData = {
    series: [
      {
        name: "Package Selection Period",
        data: [20, 140, 60, 90, 200, 150, 250, 170, 300, 180, 260, 360],
      },
      {
        name: "Package Announcement Period",
        data: [0, 120, 40, 160, 50, 200, 70, 240, 80, 280, 160, 320],
      },
      {
        name: "Package Implementation Period",
        data: [40, 180, 60, 140, 80, 280, 120, 290, 180, 260, 280, 300],
      },
    ],
    options: {
      chart: {
        type: "line", height: 350, width: "100%",
        toolbar: {
          show: false,
        },
      },
      stroke: { curve: "smooth", width: 3 },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
      },
      colors: ["#861A14", "#F93C65", "#861A1440"],
    },
  };

  const TotalPackageData = [
    { id: 1, institution: "Kementerian Perhubungan", total: 123 },
    { id: 2, institution: "Kementrian Olahraga", total: 85 },
    { id: 3, institution: "Pemerintah Perhubungan", total: 75 },
    { id: 4, institution: "Kementerian Olahraga", total: 55 },
    { id: 5, institution: "Kementrian Olahraga", total: 33 },
  ];
  const maxTotal = Math.max(...TotalPackageData.map((d) => d.total));

  const totalBudgetData = [
    { id: 1, institution: "Kementerian Perhubungan", total: "Rp 123.000.000" },
    { id: 2, institution: "Kementerian Olahraga", total: "Rp 85.000.000" },
    { id: 3, institution: "Pemerintah Perhubungan", total: "Rp 75.000.000" },
    { id: 4, institution: "Kementerian Olahraga", total: "Rp 55.000.000" },
    { id: 5, institution: "Kementerian Olahraga", total: "Rp 33.000.000" },
  ];

  const formattedData = totalBudgetData.map(item => ({
    ...item,
    total: parseInt(item.total.replace(/[^0-9]/g, ""), 10),
  }));

  const maxBudget = Math.max(...formattedData.map(d => d.total));



  return (
    <div>
      {/* Page Content */}
      <div className="page-content">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
          <p>Fitur ini merekapitulasi RUP berdasarkan seluruh sumber dana
            dari pengumuman yang telah dilakukan oleh kementerian/instansi/pemerintah daerah di Indonesia.</p>
        </div>

        <div className="dashboard-section top-section">
          <div className="today-sales-card">
            <div className="today-sales-header">
              <div className="d-flex flex-column">
                <div className="dashboard-title">Today's Recaps</div>
              </div>
            </div>
            <div className="today-sales-date">
              <div className="select-date">
                <Select2 options={dateList} // Pastikan ini array berisi objek tanggal
                  optionValue={(option) => option.date?.toString()} // Gunakan toString() untuk memastikan string
                  optionLabel={(option) => new Date(option.date).toLocaleDateString("id-ID")} // Format tanggal yang lebih readable
                  placeholder={"Pilih Tanggal"}
                  value={dateList ? dateList.find((option) => option.date === selectedDate) : null} // Cocokkan tanggal yang dipilih
                  handleChange={(e) => onChangeDate(e, "selectedDate")} />
              </div>
              <button className="export-button"><BiExport /> Export</button>
            </div>
            {/* <div className="today-sales-cards"> */}
            <div className="today-sales-cards-container">
              <div className="today-sales-cards">
                {/* {[...Array(4)].map((_, index) => ( */}
                <div className="today-cards">
                  <div className="card-art">
                    <BiMoney size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">Rp. 120.000.000</p>
                    <p className="today-card-title">Total Budget</p>
                    <p className="today-card-sub">Total of maximum allocated funds.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                <div className="today-cards">
                  <div className="card-art">
                    <BsBoxes size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Total Procurement</p>
                    <p className="today-card-sub">Total of procurement<br></br> projects.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                {/* ))} */}
                <div className="today-cards">
                  <div className="card-art">
                    <BiSolidCoupon size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Total E-Purchasing</p>
                    <p className="today-card-sub">Total purchases via electronic catalog.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                <div className="today-cards">
                  <div className="card-art">
                    <BiTrophy size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Total Contest</p>
                    <p className="today-card-sub">Total projects from creative contests.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                <div className="today-cards">
                  <div className="card-art">
                    <LuBoxSelect size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Total Selection</p>
                    <p className="today-card-sub">Total projects chosen by qualification.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                <div className="today-cards">
                  <div className="card-art">
                    <FaTag size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Total Competition</p>
                    <p className="today-card-sub">Total projects awarded through competition.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                <div className="today-cards">
                  <div className="card-art">
                    <FaRegHandshake size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Direct Procurement</p>
                    <p className="today-card-sub">Total projects bought directly.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                <div className="today-cards">
                  <div className="card-art">
                    <FaRegHandPointRight size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Direct Appointment</p>
                    <p className="today-card-sub">Total projects assigned without bidding.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                <div className="today-cards">
                  <div className="card-art">
                    <MdOutlineDocumentScanner size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Multi-Year Contract</p>
                    <p className="today-card-sub">Total projects with multi-year contracts.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
                <div className="today-cards">
                  <div className="card-art">
                    <PiGavelBold size={25} />
                  </div>
                  <div>
                    <p className="today-card-total">123</p>
                    <p className="today-card-title">Total Quick-Tender</p>
                    <p className="today-card-sub">Total projects via fast bidding.</p>
                    <p className="today-cards-plus">+1,2% from yesterday</p>
                  </div>
                </div>
              </div>
              <div className="target-reality-chart">
                <div className="dashboard-title">Total Types of Business</div>
                <p className="dashboard-sub">Total of business categories</p>
                <ReactApexChart options={polarChartData.options} series={polarChartData.series} type="pie" height={350} />
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-section middle-section">
          <div className="visitor-chart">
            <div className="dashboard-title">Procurement Insights</div>
            <p className="dashboard-sub">Trends of the day's key procurement activities</p>
            <div className="visitor-chart2">
              <ReactApexChart options={splineChartData.options} series={splineChartData.series} type="line" height={250} width="100%" />
            </div>
          </div>
          <div className="customer-chart">
            <div className="dashboard-title">Regional Procurement and Budget Summary</div>
            <p className="dashboard-sub">Ringkasan pengadaaan dan anggaran di daerah Indonesia</p>
            {/* <IndonesiaMap /> */}
          </div>
          {/* <div className="target-reality-chart">
            <div className="dashboard-title">Total Types of Business</div>
            <p className="dashboard-sub">Total of business categories</p>
            <ReactApexChart options={polarChartData.options} series={polarChartData.series} type="pie" height={200} />
          </div> */}
          {/* <div className="total-revenue">
            <div className="dashboard-title">Rank of Institutions by Packages</div>
            <p className="dashboard-sub">Peringkat akumulasi total paket terbanyak di lembaga.</p>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>K/L/PD</th>
                  <th></th>
                  <th>Total Paket</th>
                </tr>
              </thead>
              <tbody>
                {TotalPackageData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.institution}</td>
                    <td style={{ width: "100px", padding: "5px 10px" }}>
                      <div style={{ background: "white", borderRadius: "4px" }}>
                        <ReactApexChart
                          options={{
                            chart: { type: "bar", sparkline: { enabled: true } },
                            plotOptions: {
                              bar: {
                                horizontal: true,
                                barHeight: "50%",
                                borderRadius: 4,
                                distributed: true,
                              },
                            },
                            tooltip: { enabled: false },
                            xaxis: { categories: [item.institution] },
                            colors: ["#F93C65"],
                          }}
                          series={[{ data: [(item.total / maxTotal) * 50] }]}
                          type="bar"
                          height={20}
                        />
                      </div>
                    </td>
                    <td className="custom-table-paket">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>

        <div className="dashboard-section bottom-section">
          <div className="sales-map">
            <div className="dashboard-title">Procurement Timeline Overview</div>
            <p className="dashboard-sub">Procurement trend's by date</p>
            <ReactApexChart options={TrendsData.options} series={TrendsData.series} type="line" height={250} width="100%" />
          </div>
          <div className="top-products">
            {activeToggle === "Budget" && (
              <div>
                <div className="dashboard-title">Rank of Institutions by Budgets</div>
                <p className="dashboard-sub">Peringkat akumulasi total budget terbanyak di lembaga.</p>
              </div>
            )}

            {activeToggle === "Package" && (
              <div>
                <div className="dashboard-title">Rank of Institutions by Packages</div>
                <p className="dashboard-sub">Peringkat akumulasi total paket terbanyak di lembaga.</p>
              </div>
            )}

            {/* Toggle pindah ke bawah dashboard title dan sub */}
            <div className="toggle-group">
              {["Budget", "Package"].map((toggle, idx) => (
                <button
                  key={idx}
                  className={`toggle-button ${activeToggle === toggle ? "active" : ""}`}
                  onClick={() => handleToggle(toggle)}
                >
                  {toggle}
                </button>
              ))}
            </div>

            {activeToggle === "Budget" && (
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>K/L/PD</th>
                    <th></th>
                    <th>Total Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {formattedData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.institution}</td>
                      <td style={{ width: "50px", padding: "5px 10px" }}>
                        <div style={{ background: "white", borderRadius: "4px", padding: "2px" }}>
                          <ReactApexChart
                            options={{
                              chart: { type: "bar", sparkline: { enabled: true } },
                              plotOptions: {
                                bar: {
                                  horizontal: true,
                                  barHeight: "50%",
                                  borderRadius: 4,
                                  distributed: true,
                                },
                              },
                              tooltip: { enabled: false },
                              xaxis: { categories: [item.institution] },
                              colors: ["#F93C65"],
                            }}
                            series={[{ data: [(item.total / maxBudget) * 70] }]}
                            type="bar"
                            height={20}
                          />
                        </div>
                      </td>
                      <td className="custom-table-paket">Rp {item.total.toLocaleString("id-ID")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeToggle === "Package" && (
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>K/L/PD</th>
                    <th></th>
                    <th>Total Paket</th>
                  </tr>
                </thead>
                <tbody>
                  {TotalPackageData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.institution}</td>
                      <td style={{ width: "100px", padding: "5px 10px" }}>
                        <div style={{ background: "white", borderRadius: "4px" }}>
                          <ReactApexChart
                            options={{
                              chart: { type: "bar", sparkline: { enabled: true } },
                              plotOptions: {
                                bar: {
                                  horizontal: true,
                                  barHeight: "50%",
                                  borderRadius: 4,
                                  distributed: true,
                                },
                              },
                              tooltip: { enabled: false },
                              xaxis: { categories: [item.institution] },
                              colors: ["#F93C65"],
                            }}
                            series={[{ data: [(item.total / maxTotal) * 50] }]}
                            type="bar"
                            height={20}
                          />
                        </div>
                      </td>
                      <td className="custom-table-paket">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

    </div>
  );

};

Dashboard.propTypes = {
  dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {})(Dashboard);
