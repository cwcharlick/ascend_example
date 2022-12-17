import { line, scaleBand, scaleLinear } from "d3";
import { useEffect, useState } from "react";
import Markline from "./MarkLine";
import { colors } from "./colors";
import AxisLeft from "./AxisLeft";
import OptionToggle from "./OptionToggle";
import Link from "next/link";

export default function LineChart({ data }) {
  const dataSets = data.map((d) => d.setName);
  const [selectedSet, setSelectedSet] = useState(dataSets[0]);
  const [hiddenLines, setHiddenLines] = useState([]);
  const [width, setWidth] = useState(100);
  useEffect(() => {
    setWidth(document.body.offsetWidth);
    window.addEventListener("resize", () => {
      setWidth(document.body.offsetWidth);
    });
  }, []);

  //this if statement only exists because it's an example project!
  if (data[0].data.length === 0)
    return (
      <>
        Fake data only exists for the first product, &nbsp;
        <Link
          href="/products/SN0000f43"
          style={{ color: "var(--main)", textDecoration: "underline" }}
        >
          SN0000f43
        </Link>
        .
      </>
    );
  // back to actual features:

  const selectedDataSet = data.find((d) => d.setName === selectedSet);
  const graphData = selectedDataSet.data;

  const individualGraphLines = [];
  graphData.forEach((point) => {
    const graphLine = individualGraphLines.find((i) => i.label === point.label);
    if (graphLine) {
      graphLine.points.push({ date: point.date, value: point.value });
    } else {
      individualGraphLines.push({
        label: point.label,
        points: [{ date: point.date, value: point.value }],
      });
    }
  });

  const height = width * 0.66;
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleLinear().domain([0, 10]).range([0, innerHeight]);
  const xScale = scaleBand()
    .domain(graphData.map((d) => d.date))
    .range([0, innerWidth]);

  const lineToDraw = line()
    .x((d) => xScale(d.date) + xScale.bandwidth() / 2)
    .y((d) => innerHeight - yScale(d.value));

  return (
    <>
      {individualGraphLines.map((item) => (
        <OptionToggle
          multi={true}
          key={item.label}
          enabled={hiddenLines.includes(item.label) ? false : true}
          text={item.label}
          action={() => {
            if (hiddenLines.includes(item.label)) {
              setHiddenLines(hiddenLines.filter((line) => line !== item.label));
            } else {
              setHiddenLines([...hiddenLines, item.label]);
            }
          }}
        />
      ))}
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisLeft
            innerHeight={innerHeight}
            innerWidth={innerWidth}
            yScale={yScale}
          />
          {individualGraphLines.map((l, i) => {
            if (hiddenLines.includes(l.label)) return;
            return (
              <Markline
                key={l.label}
                line={lineToDraw}
                data={l.points}
                xScale={xScale}
                yScale={yScale}
                innerHeight={innerHeight}
                color={colors[i]}
              />
            );
          })}
        </g>
      </svg>
      {dataSets.map((d) => (
        <OptionToggle
          multi={false}
          key={d}
          enabled={selectedSet === d ? true : false}
          text={d}
          action={() => {
            setSelectedSet(d);
          }}
        />
      ))}
    </>
  );
}
