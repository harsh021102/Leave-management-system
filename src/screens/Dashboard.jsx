import { Box, Container, Typography } from "@mui/material";
import React from "react";
import KPI from "../components/KPI";
import MyLeaves from "../components/MyLeaves";
import "../styles/Dashboard.css"; // Assuming you have a CSS file for styles
import { useState } from "react";
const Dashboard = () => {
	return (
		<Box
			className="dashboard-container"
			sx={{ backgroundColor: "background.default" }}
		>
			<KPI />
			<MyLeaves />
		</Box>
	);
};

export default Dashboard;
