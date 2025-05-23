import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import {
    MdOutlinePeople, MdAccountBalanceWallet, MdClass, MdMenuBook,
    MdStickyNote2, MdMessage, MdOutlineKeyboardArrowRight
} from "react-icons/md";
import { TbBooks, TbBus } from "react-icons/tb";
import { FaRegCalendarDays } from "react-icons/fa6";
import { PiListStarFill, PiExamFill } from "react-icons/pi";
import { IoBedSharp } from "react-icons/io5";
import Logo from '../../assets/img/logo1.png';
import Button from '@mui/material/Button';
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';

export const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState("");
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const toggleMenu = (label) => {
        setOpenMenu(openMenu === label ? "" : label);
    };

    const toggleSidebar = () => {
        setMobileSidebarOpen(!mobileSidebarOpen);
    };

    const menuItems = [
        {
            icon: <AiOutlineDashboard />, label: "Dashboard", link: "/admin", subMenu: [
                { icon: <MdOutlineKeyboardArrowRight />, label: "Admin", link: "/admin" },
                { icon: <MdOutlineKeyboardArrowRight />, label: "Students", link: "/students" },
                { icon: <MdOutlineKeyboardArrowRight />, label: "Parents", link: "/parents" },
                { icon: <MdOutlineKeyboardArrowRight />, label: "Teachers", link: "/teachers" },
            ]
        },
        {
            icon: <BsPeople />, label: "Students", link: "#", subMenu: [
                { icon: <MdOutlineKeyboardArrowRight />, label: "All Students", link: "/all-student" },
                { icon: <MdOutlineKeyboardArrowRight />, label: "Admission Form", link: "/admission-form" },
            ]
        },
        { icon: <MdOutlinePeople />, label: "Teachers", link: "/allteacher" },
        { icon: <MdOutlinePeople />, label: "Parents", link: "/allparents" },
        { icon: <TbBooks />, label: "Library", link: "/library" },
        { icon: <MdAccountBalanceWallet />, label: "Account", link: "/account" },
        { icon: <MdClass />, label: "Class", link: "/class" },
        { icon: <MdMenuBook />, label: "Subject", link: "/subject" },
        { icon: <FaRegCalendarDays />, label: "Class Routine", link: "/routine" },
        { icon: <PiListStarFill />, label: "Attendance", link: "/attendance" },
        { icon: <PiExamFill />, label: "Exam", link: "/exam" },
        { icon: <TbBus />, label: "Transport", link: "/transport" },
        { icon: <IoBedSharp />, label: "Hostel", link: "/hostel" },
        { icon: <MdStickyNote2 />, label: "Notice", link: "/notice" },
        { icon: <MdMessage />, label: "Message", link: "/message" },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="d-block d-md-none p-2 bg-light shadow-sm">
                <Button variant="outlined" onClick={toggleSidebar}>
                    <SegmentIcon />
                </Button>
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${mobileSidebarOpen ? 'open' : ''}`}>
                {/* Sidebar Header */}
                <div className="sidebar-header d-flex justify-content-between align-items-center p-2">
                    <Link to={'/'}>
                        <img src={Logo} alt="Logo" height="40" />
                    </Link>
                    <div className="d-md-none">
                        <Button onClick={toggleSidebar}><CloseIcon /></Button>
                    </div>
                </div>

                <ul className="nav flex-column">
                    {menuItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            {item.subMenu ? (
                                <>
                                    <div
                                        className="nav-link d-flex align-items-center justify-content-between"
                                        onClick={() => toggleMenu(item.label)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="d-flex align-items-center">
                                            {item.icon}
                                            <span className="ms-2">{item.label}</span>
                                        </div>
                                        <MdOutlineKeyboardArrowRight
                                            style={{
                                                transform: openMenu === item.label ? "rotate(90deg)" : "rotate(0deg)",
                                                color: openMenu === item.label ? "#ffa901" : "inherit",
                                            }}
                                        />
                                    </div>

                                    {openMenu === item.label && (
                                        <ul className="submenu ps-4">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        to={subItem.link}
                                                        className="nav-link d-flex align-items-center text-decoration-none"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => setMobileSidebarOpen(false)}
                                                    >
                                                        {subItem.icon}
                                                        <span className="ms-2">{subItem.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={item.link}
                                    className="nav-link d-flex align-items-center text-decoration-none justify-content-between"
                                    onClick={() => setMobileSidebarOpen(false)}
                                >
                                    <div className="d-flex align-items-center">
                                        {item.icon}
                                        <span className="ms-2">{item.label}</span>
                                    </div>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
