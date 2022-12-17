export default function Markline({
  line,
  data,
  xScale,
  yScale,
  innerHeight,
  color,
}) {
  const linePoints = data.map((p) => {
    return {
      x: xScale(p.date) + xScale.bandwidth() / 2,
      y: innerHeight - yScale(p.value),
    };
  });
  return (
    <g>
      {linePoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill={color} />
      ))}
      <path d={line(data)} fill="none" stroke={color} strokeWidth="1" />
    </g>
  );
}
