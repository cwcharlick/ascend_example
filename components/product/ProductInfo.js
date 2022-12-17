import LineChart from "../charts/LineChart";
import { Stat } from "./ProductCard";

export default function ProductInfo({ product, logs }) {
  return (
    <>
      <Section title="Integrated electronics">
        {product.integratedElectronics.map((item) => (
          <KPI
            key={item.name}
            title={item.name}
            value={`${item.value}${item.unit}`}
          />
        ))}
      </Section>
      <Section title="Operational characteristics">
        <div className="stats">
          {product.operationalCharacteristics.map((item) => (
            <Stat
              key={item.name}
              label={`${item.name}: `}
              text={`${item.value}${item.unit}`}
            />
          ))}
        </div>
      </Section>
      <Section title="Charts">
        <LineChart data={logs} />
      </Section>
    </>
  );
}

export function Section({ title, children }) {
  return (
    <div className="section">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export function KPI({ title, value }) {
  return (
    <div className="kpi">
      <div className="value">{value}</div>
      <div className="title">{title}</div>
    </div>
  );
}
