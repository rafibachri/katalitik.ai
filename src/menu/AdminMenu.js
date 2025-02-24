import { FaHome, FaLayerGroup, FaCog, FaThList, FaUserCog, FaBuilding, FaClock, FaWifi, FaHistory, FaRegCalendar, FaFileAlt, FaRegUser, FaBusinessTime } from "react-icons/fa";

import { BiTask } from "react-icons/bi";
import { BsClipboard, BsPerson } from "react-icons/bs";
import { MdDashboard, MdOutlineBookmarkAdded, MdOutlineWifiProtectedSetup } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { FaBookBookmark, FaLocationDot } from "react-icons/fa6";
import { PiColumnsFill } from "react-icons/pi";
import { ColumnsGap, ThreeDots } from "react-bootstrap-icons";

const AdminMenu = [
  {
    group: "Main Menu",
    path: "/home",
    icon: <img src="/assets/images/katalitik-logo-3.png" className="sidebar-icon"/>,
    title: "Chat Ai",
  },

  {
    group: "Main Menu",
    path: "/dashboard",
    icon: <MdDashboard className="sidebar-icon"/>,
    title: "Dashboard",
  },
  {
    group: "Main Menu",
    path: "/project",
    icon: <FaBookBookmark className="sidebar-icon"/>,
    title: "Project",
  },

  {
    group: "Chat History",
    path: "/chatHistory",
    title: "Chat History",
    icon: <ThreeDots className="sidebar-icon"/>,
  },

  {
    group: "Chat History",
    path: "/chatHistory",
    title: "Chat History",
    icon: <ThreeDots className="sidebar-icon"/>,
  },

  {
    group: "Chat History",
    path: "/chatHistory",
    title: "Chat History",
    icon: <ThreeDots className="sidebar-icon"/>,
  },

  {
    group: "dailytask",
    icon: <BiTask className="sidebar-icon" />,
    path: "/dailytask/dailytask-report",
    title: "Daily Task",
    role: "Daily Task",

  },
  {
    group: "company",
    icon: <FaThList className="sidebar-icon" />,
    title: "Perusahaan",
    role: "Perusahaan",
    subMenus: [
      {
        path: "/company/profilperusahaan",
        icon: <FaClock className="sidebar-icon" />,
        title: "Profil Perusahaan",
        role: "Perusahaan - Profil Perusahaan"
      },
      {
        path: "/company/divisi",
        icon: <FaBuilding className="sidebar-icon" />,
        title: "Divisi",
        role: "Perusahaan - Divisi"
      },
      {
        path: "/company/posisi",
        icon: <BsPerson className="sidebar-icon" />,
        title: "Posisi",
        role: "Perusahaan - Posisi"
      },
      {
        path: "/company/calendar",
        icon: <FaRegCalendar className="sidebar-icon" />,
        title: "Kalender",
        role: "Perusahaan - Kalender"
      },
      {
        path: "/company/shift",
        icon: <FaBusinessTime className="sidebar-icon" />,
        title: "Shift",
        role: "Perusahaan - Shift"
      },
    ],
  },

  {
    group: "location",
    icon: <FaLocationDot className="sidebar-icon" />,
    path: "/location/locationSetup",
    title: "Location Setup",
    role: "Location Setup",

  },
  {
    group: "reports",
    path: "/admin/reports",
    icon: <FaFileAlt className="sidebar-icon" />,
    title: "Reports",
    role: "Reports"
  },
  {
    group: "admin",
    icon: <FaCog className="sidebar-icon" />,
    title: "Admin Menu",
    role: "Admin Menu",
    subMenus: [
      // {
      //   path: "/admin/module",
      //   icon: <FaLayerGroup className="sidebar-icon" />,
      //   title: "Module",
      //   role: "Admin Menu - Module"
      // },
      {
        path: "/admin/user",
        icon: <FaRegUser className="sidebar-icon" />,
        title: "User",
        role: "Admin Menu - User"
      },
      {
        path: "/admin/role",
        icon: <GrUserAdmin className="sidebar-icon" />,
        title: "Role",
        role: "Admin Menu - Role"
      },

    ],
  },
  {
    group: "cuti",
    icon: <BsClipboard className="sidebar-icon" />,
    path: "/cuti/pengajuancuti",
    title: "Cuti",
    role: "Cuti",

  },

  {
    group: "riwayat",
    icon: <FaHistory className="sidebar-icon" />,
    path: "/riwayat/riwayatabsensi",
    title: "Riwayat Absensi",
    role: "Riwayat Absensi",

  },
  // {
  //   group: "",
  //   path: "/admin/dashboard-user",
  //   icon: <FaCalendar className="sidebar-icon" />,
  //   title: "Dashboard User",
  // },
];

export default AdminMenu;
