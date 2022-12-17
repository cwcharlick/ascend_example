export default function AxisLeft({ yScale, innerHeight, innerWidth }) {
  return yScale.ticks().map((tickValue) => (
    <g
      key={tickValue}
      transform={`translate(0, ${
        innerHeight - Math.floor(yScale(tickValue)) + 0.5
      })`}
    >
      <line x2={innerWidth} stroke="var(--neutral)" strokeWidth="1" />
    </g>
  ));
}
