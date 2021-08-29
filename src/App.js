import React, { useRef, useEffect, useState } from "react";
import { rgb, select } from "d3";
import ChartWrapper from "./wrapper/ChartWrapper";

//d3 handles the dom

function App() {
	const [data, setData] = useState([25, 30, 45, 60, 20]);
	const svgRef = useRef();
	useEffect(() => {
		const svg = select(svgRef.current);
		svg
			.selectAll("circle")
			.data(data)
			// .join(
			// 	(enter) =>
			// 		enter
			// 			.append('circle')
			// 			.attr('class', 'new')
			// 			.style('fill', (val) => rgb(255 - val, 255 - val, val)),
			// 	(update) => update.attr('class', 'updated'),
			// 	(exit) => exit.remove()
			// )
			.join("circle")
			.attr("r", (val) => val)
			.attr("cx", (val) => val * 2)
			.attr("cy", (val) => val * 2)
			.style("fill", (val) => rgb(255 - val, 255 - val, val));
	}, [data]);
	return (
		<React.Fragment>
			<ChartWrapper />
			{/* <svg ref={svgRef}></svg> */}
			<br />
			<br />
			<button onClick={() => setData(data.map((val) => val + 5))}>Update data</button>
			<button onClick={() => setData(data.filter((val) => val < 35))}>Filter data</button>
		</React.Fragment>
	);
}

export default App;
