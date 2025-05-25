import { Box } from "@mui/material";
import React from "react";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FaScaleBalanced } from "react-icons/fa6";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../styles/LeftNav.css"; // Assuming you have a CSS file for styles
const LeftNav = () => {
	return (
		<Box className="left-nav-wrapper">
			<Box className="left-nav-container">
				<Box className="nav-item">
					<SpaceDashboardIcon className="nav-icon" />
					<span className="nav-text">Dashboard</span>
				</Box>
				<Box className="nav-item">
					<CalendarMonthIcon className="nav-icon" />
					<span className="nav-text">Calendar</span>
				</Box>
				<Box className="nav-item">
					<FaScaleBalanced className="nav-icon" />
					<span className="nav-text">Reports</span>
				</Box>
				<Box className="nav-item">
					<CheckCircleIcon className="nav-icon" />
					<span className="nav-text">Settings</span>
				</Box>
			</Box>
		</Box>
	);
};

export default LeftNav;
