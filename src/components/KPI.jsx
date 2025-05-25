import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import "../styles/KPI.css"; // Assuming you have a CSS file for styles
const kpiData = [
	{ id: 1, count: 1, leaveType: "Annual Leave Balance", bgColor: "red" },
	{ id: 2, count: 2, leaveType: "Sick Leave Balance", bgColor: "blue" },
	{ id: 3, count: 3, leaveType: "Casual Leave Balance", bgColor: "green" },
	{ id: 4, count: 4, leaveType: "Maternity Leave Balance", bgColor: "yellow" },
	{ id: 5, count: 5, leaveType: "Paternity Leave Balance", bgColor: "orange" },
];

const KPI = () => {
	return (
		<Box className="kpi-container">
			{kpiData.map((kpi) => (
				<Paper key={kpi.id} className="kpi-card" square={false}>
					<Typography
						variant="h5"
						className="kpi-count"
						align="center"
						sx={{ backgroundColor: kpi.bgColor }}
					>
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
