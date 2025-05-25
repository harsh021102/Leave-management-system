import { Box, Container, Typography } from "@mui/material";
import React from "react";
import KPI from "../components/KPI";
import MyLeaves from "../components/MyLeaves";
import "../styles/Dashboard.css"; // Assuming you have a CSS file for styles
const Dashboard = () => {
	return (
		<Box className="dashboard-container">
			<KPI />
			<MyLeaves />
		</Box>
	);
};

export default Dashboard;
