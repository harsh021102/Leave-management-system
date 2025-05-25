import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import "../styles/TopHeader.css"; // Assuming you have a CSS file for styles
// import logo from "../assets/logo.png"; // Adjust the path to your logo image
import MenuIcon from "@mui/icons-material/Menu";
import anu from "../assets/anu.png"; // Adjust the path to your profile image
const drawerWidth = 240;
const TopHeader = () => {
	return (
		<Paper className="header-container">
			<Box className="image-menu-container">
				<MenuIcon className="menu-icon" />
				{/* <img src={logo} alt="company-logo" /> */}
				<Typography variant="h6" className="logo-text">
					Company Logo
				</Typography>
			</Box>
			<Box className="menu-container">
				<Box className="link-container">
					<Typography variant="h6" className="menu-item">
						Dashboard
					</Typography>
					<Typography variant="h6" className="menu-item">
						Calendar
					</Typography>
					<Typography variant="h6" className="menu-item">
						Reports
					</Typography>
					<Typography variant="h6" className="menu-item">
						Settings
					</Typography>
				</Box>
				<Box className="profile-container">
					<Avatar alt="profile-image" src={anu} />
				</Box>
			</Box>
		</Paper>
	);
};

export default TopHeader;
