import { Box, Paper } from "@mui/material";
import React from "react";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FaScaleBalanced } from "react-icons/fa6";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ApprovalIcon from "@mui/icons-material/Approval";
import "../styles/LeftNav.css"; // Assuming you have a CSS file for styles
import { useMain } from "../context/MainContext"; // Adjust the import path as necessary
const drawerWidth = 200;
const drawerMenuItems = [
	{
		id: 1,
		label: "Dashboard",
		icon: <SpaceDashboardIcon className="nav-icon" />,
	},
	{
		id: 2,
		label: "Holidays",
		icon: <CalendarMonthIcon className="nav-icon" />,
	},
	{ id: 3, label: "Approvals", icon: <ApprovalIcon className="nav-icon" /> },
	{ id: 4, label: "Settings", icon: <CheckCircleIcon className="nav-icon" /> },
];
const LeftNav = () => {
	const { openDrawer } = useMain();
	return (
		<Paper
			elevation={3}
			square={false}
			className="left-nav-wrapper"
			sx={{
				width: openDrawer ? drawerWidth : 0,
				display: openDrawer ? "block" : "none",
				transition: "display 0.3s ease",
				borderRadius: 0,
			}}
		>
			<Box className="left-nav-container">
				{drawerMenuItems.map((item) => (
					<Paper
						elevation={1}
						key={item.id}
						className="nav-item"
						sx={{ backgroundColor: "secondary.main" }}
					>
						{item.icon}
						<span className="nav-text">{item.label}</span>
					</Paper>
				))}
				{/* <Box className="nav-item" sx={{ backgroundColor: "primary.main" }}>
					<SpaceDashboardIcon className="nav-icon" />
					<span className="nav-text">Dashboard</span>
				</Box>
				<Box className="nav-item" sx={{ backgroundColor: "primary.main" }}>
					<CalendarMonthIcon className="nav-icon" />
					<span className="nav-text">Calendar</span>
				</Box>
				<Box className="nav-item" sx={{ backgroundColor: "primary.main" }}>
					<FaScaleBalanced className="nav-icon" />
					<span className="nav-text">Reports</span>
				</Box>
				<Box className="nav-item" sx={{ backgroundColor: "primary.main" }}>
					<CheckCircleIcon className="nav-icon" />
					<span className="nav-text">Settings</span>
				</Box> */}
			</Box>
		</Paper>
	);
};

export default LeftNav;
