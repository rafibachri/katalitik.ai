import { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

// Icon
import { MdArrowForwardIos } from "react-icons/md";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import AdminMenu from "../../menu/AdminMenu";
import { loadCompany } from "../../actions/getData";
import { loadData } from "../../actions/data";
import { Pin, ThreeDots } from "react-bootstrap-icons";
import { FaRegTrashCan } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";


const Sidebar = ({ showMenu, user, data, master, roles, loadRole, loadCurrentRole, setShowMenu, loadData, loadCompany }) => {

  let { type, id } = useParams();
  const location = useLocation();
  const locationArr = location.pathname.split("/");
  const navigate = useNavigate();
  const [groupList, setGroupList] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);
  const [first, setFirst] = useState(true);
  const [groupMenu, setGroupMenu] = useState("");
  const [companyList, setCompanyList] = useState(null);

  useEffect(() => {
    let path = "/home";
    if (locationArr.length > 2) {
      path = "/" + locationArr[1] + "/" + locationArr[2];
      setGroupMenu(locationArr[1]);
    }
    if (locationArr.length === 2 && (locationArr[1] === "dashboard" || locationArr[1] === "project" || locationArr[1] === "chatHistory" || locationArr[1] === "home")) {
      path = "/" + locationArr[1];
      setGroupMenu(locationArr[1]);
    }
    if (locationArr.length === 3 && (locationArr[1] === "home")) {
      path = "/" + locationArr[1];
      setGroupMenu(locationArr[1]);
    }
    setActiveMenu(path);
    console.log("locationArr:", locationArr);
    console.log("activeMenu path:", path);
    
  }, [locationArr, setGroupMenu, setActiveMenu]);

  if (first && groupMenu !== "") {
    setGroupList({ ...groupList, [groupMenu]: true });
    setFirst(false);
  }

  const handleGroup = (e, type, expand = null) => {
    if (e !== undefined && e !== null) e.preventDefault();

    let value = groupList[type];
    if (value === undefined) value = true;
    else value = !value;
    if (expand !== null) value = expand;
    setGroupList({ ...groupList, [type]: value });
  };

  const handleItemClick = (e) => {
    if (window.innerWidth <= 768)
      setShowMenu(false);
  }

  // useEffect(() => {
  //   loadCompany();
  //   if (user !== null && id !== undefined) loadData({ id });
  // }, [id, user, loadData]);

  useEffect(() => {
    loadCompany();
  }, [loadCompany]);

  useEffect(() => {
    if (master.company !== undefined && master.company !== null) {
      let list = [...master.company];
      const obj = list.find((obj) => obj.id === 0);
      if (obj === undefined || obj === null) {
        list.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      setCompanyList(list);
    }

  }, [master]);

  // const renderSubmenu = (subMenus) =>
  //   subMenus.map((item, index) => {
  //     return (
  //       <li key={index} className="nav-item">
  //         <Link className={"nav-link d-flex align-items-center " + (activeMenu === item.path ? "active" : "")} to={item.path}>
  //           {item.icon}
  //           <span className="sidebar-text">{item.title}</span>
  //         </Link>
  //       </li>
  //     );
  //   });

  // const renderMenu = (menu) =>
  //   menu.map((item, index) => {
  //     if (item.path === undefined) {
  //       return (
  //         <Fragment key={index}>
  //           <li className="nav-item nav-dropdown" onClick={(e) => handleGroup(e, item.group)}>
  //             <div className="nav-link d-flex align-items-center justify-content-between">
  //               <div className="d-flex align-items-center">
  //                 {item.icon}
  //                 <span className="sidebar-text">{item.title}</span>
  //               </div>
  //               <MdArrowForwardIos className={"nav-arrow " + (groupList[item.group] ? "down" : "")} />
  //             </div>
  //           </li>

  //           {groupList[item.group] && (
  //             <div id={item.group} className="nav-submenu collape">
  //               {renderSubmenu(item.subMenus)}
  //             </div>
  //           )}
  //         </Fragment>
  //       );
  //     }

  //     return (
  //       <li key={index} className="nav-item">
  //         <Link className={"nav-link d-flex align-items-center " + (activeMenu === item.path ? "active" : "")} to={item.path}>
  //           {item.icon}
  //           <span className="sidebar-text">{item.title}</span>
  //         </Link>
  //       </li>
  //     );
  //   });

  const companyID = companyList && companyList.length > 0 ? companyList[0].companyID : null;

  const [menuVisible, setMenuVisible] = useState(false);
  const [activePopupIndex, setActivePopupIndex] = useState(null);


  // const togglePopup = (event) => {
  //   event.stopPropagation(); 
  //   setMenuVisible((prev) => !prev);
  // };
  const togglePopup = (index) => {
  //   event.stopPropagation(); 

    setActivePopupIndex(activePopupIndex === index ? null : index);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".popup-menu2")) {
        setActivePopupIndex(null);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  

  // useEffect(() => {
  //   const handleClickOutside = () => setMenuVisible(false);
  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);

  // console.log("co", companyID)

  const renderSubMenu = (item) => {
    if (roles !== null && roles !== undefined) {
      const subMenuComponents = item.subMenus.map((submenu, index) => {
        // const tempCurrentModule = roles.find((obj) => obj.description.includes(submenu.role));
        // console.log(tempCurrentModule)
        // // console.log(item.subMenus)
        // if (tempCurrentModule !== null && tempCurrentModule !== undefined) {
        //   if (tempCurrentModule.isRead) {
        //     if (tempCurrentModule.description === "Perusahaan - Profil Perusahaan") {
        //       return (
        //         <li key={index} className="nav-item">
        //           <Link className={"nav-link d-flex align-items-center " + (activeMenu === submenu.path ? "active" : "")} to={${submenu.path}/${companyID}/edit} onClick={(e) => handleItemClick(e)}>
        //             {submenu.icon}
        //             <span className="sidebar-text">{submenu.title}</span>
        //           </Link>
        //         </li>
        //       );
        //     } else {
        return (
          <li key={index} className="nav-item">
            <Link className={"nav-link d-flex align-items-center " + (activeMenu === submenu.path ? "active" : "")} to={submenu.path} onClick={(e) => handleItemClick(e)}>
              {submenu.icon}
              <span className="sidebar-text">{submenu.title}</span>
            </Link>
          </li>
        );
        // }
        // }
        // }
        // return null;
      });
      return subMenuComponents.filter((component) => component !== null);
    }
    return null;
  };


  const renderMenu = (menu) => {
    return menu.map((item, index) => {
      const tempMenu = roles?.find((obj) => obj.description == item.role);
      if (item.group == undefined || item.group == "" || item.group == "Main Menu" || tempMenu?.isRead) {
        if (item.path === undefined && user != undefined) {
          // const tempCurrentModule = roles.find((obj) => obj.description == item.role);
          // if (tempCurrentModule?.isRead) {
            return (
              <Fragment key={index}>
                <li className="nav-item nav-dropdown" onClick={(e) => handleGroup(e, item.group)}>
                  <div className="nav-link d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {item.icon}
                      <span className="sidebar-text">{item.title}</span>
                    </div>
                    <MdArrowForwardIos className={"nav-arrow " + (groupList[item.group] ? "down" : "")} />
                  </div>
                </li>
                {groupList[item.group] && (
                  <div id={item.group} className="nav-submenu collape">
                    {renderSubMenu(item)}
                  </div>
                )}
              </Fragment>
            );
          // }
          // return null;
        }

        return (
          <li key={index} className="nav-item">
            <Link className={"nav-link d-flex align-items-center " + (activeMenu === item.path ? "active" : "")} to={item.path} onClick={(e) => handleItemClick(e)}>
              {item.icon}
              <span className="sidebar-text">{item.title}</span>
            </Link>
          </li>
        );

      }

      if (item.group == undefined || item.group == "Chat History" || tempMenu?.isRead) {
        if (item.path === undefined && user != undefined) {
          // const tempCurrentModule = roles.find((obj) => obj.description == item.role);
          // if (tempCurrentModule?.isRead) {
          return (
            <Fragment key={index}>
              <li className="nav-item nav-dropdown" onClick={(e) => handleGroup(e, item.group)}>
                <div className="nav-link d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="sidebar-text">{item.title}</span>
                    {item.icon}
                  </div>
                  <MdArrowForwardIos className={"nav-arrow " + (groupList[item.group] ? "down" : "")} />
                </div>
              </li>
              {groupList[item.group] && (
                <div id={item.group} className="nav-submenu collape">
                  {renderSubMenu(item)}
                </div>
              )}
            </Fragment>
          );
          // }
          // return null;
        }

        return (
          // <li key={index} className="nav-item">
          //   <Link className={"nav-link d-flex align-items-center justify-content-between" + (activeMenu === item.path ? "active" : "")} to={item.path} onClick={(e) => handleItemClick(e)}>
          //     <span className="sidebar-text">{item.title}</span>
          //     {item.icon}
          //   </Link>
          // </li>
          <li key={index} className="nav-item">
          <div
            className={"nav-link d-flex align-items-center justify-content-between " + (activeMenu === item.path ? "active" : "")}
            onClick={() => navigate(item.path)}
          >
            <span className="sidebar-text">{item.title}</span>
            <div onClick={(e) => { e.stopPropagation(); togglePopup(index);}}style={{ cursor: "pointer", position: "relative" }}>
              {item.icon}
            </div>
          </div>
        
          {activePopupIndex === index && (
            <div style={{ position: "absolute", display: "inline-block" }}>
              <div className="popup-menu2">
                <div className="d-flex flex-row">
                  <Pin />
                  <div className="popup-title ml-2">Pin</div>
                </div>
                <div className="d-flex flex-row">
                  <LuPencilLine />
                  <div className="popup-title ml-2">
                    Rename
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <FaRegTrashCan color="#861914" />
                  <div className="popup-title ml-2">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>
        

        );

      }

    });
  }

  return (
    <nav className={`col-md-2 sidebar ${showMenu ? "active" : ""}`}>
      <div className="sidebar-sticky">
        <ul className="nav flex-column">{renderMenu(AdminMenu)}</ul>

        <div className="chatPro">
          <div className="chatPro-content">
            <div className="chatPro-logo">
              <img src="/assets/images/katalitik-logo-2.png" className=""></img>
            </div>
            <div className="chatProText">
              <div className="get-pro-text">Chat Ai Pro</div>
              <p className="chat-pro-text">Get access to all features on ChatAi</p>
            </div>
            <button className="getPro">
              Get Pro
            </button>
          </div>
        </div>
      </div>

    </nav>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object,
  data: PropTypes.object,
  roles: PropTypes.array,
  loadCompany: PropTypes.func,
  loadData: PropTypes.func,
  master: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  data: state.data,
  master: state.master,
  roles: state.auth.roles,

});

export default connect(mapStateToProps, { loadCompany, loadData })(Sidebar);