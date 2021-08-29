import React, { useRef, useState, useEffect } from "react";
import D3Chart from "../charts/D3Chart";
import Heatmap from "../charts/Heatmap";

const ChartWrapper = ({ gender }) => {
	const chartArea = useRef(null);
	const [chart, setChart] = useState(null);

	useEffect(() => {
		if (!chart) {
			// setChart(new D3Chart(chartArea.current))
			setChart(new Heatmap(chartArea.current));
		}
		// skip the loading state, when data is still a pending promise
		// else {
		// 	chart.update();
		// }
	}, [chart]);

	return <div className='chart-area' ref={chartArea}></div>;
};

export default ChartWrapper;
