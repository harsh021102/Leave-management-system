import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import "../styles/KPI.css"; // Assuming you have a CSS file for styles
const kpiData = [
	{ id: 1, count: 1, leaveType: "Annual Leave Balance" },
	{ id: 2, count: 2, leaveType: "Sick Leave Balance" },
	{ id: 3, count: 3, leaveType: "Casual Leave Balance" },
	{ id: 4, count: 4, leaveType: "Maternity Leave Balance" },
	{ id: 5, count: 5, leaveType: "Paternity Leave Balance" },
];

const KPI = () => {
	return (
		<Box className="kpi-container">
			{kpiData.map((kpi) => (
				<Paper key={kpi.id} className="kpi-card">
					<Typography variant="h4" className="kpi-count">
						{kpi.count}
					</Typography>
					<Typography variant="subtitle1" className="kpi-leave-type">
						{kpi.leaveType}
					</Typography>
				</Paper>
			))}
		</Box>
	);
};

export default KPI;
