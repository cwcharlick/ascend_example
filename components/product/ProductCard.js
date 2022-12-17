import styles from "../../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div
      className={
        product.danger
          ? `${styles.container} ${styles.danger}`
          : styles.container
      }
    >
      <div className={styles.image}>
        <img src={product.imageLocation} />
      </div>
      <div className="stats">
        <Stat label="S/N:" text={product.sn} large={true} />
        <Stat label="Type:" text={product.type} />
        <Stat label="Location:" text={product.location} />
        <Stat
          label="Status:"
          text={product.danger ? "Error" : "Active"}
          kpi={true}
        />
      </div>
    </div>
  );
}

export function Stat({ label, text, large, kpi }) {
  return (
    <div className={large ? `${styles.stat} ${styles.large}` : styles.stat}>
      <span className={styles.label}>{label}</span>{" "}
      {kpi ? <span className={styles.kpi}>{text}</span> : text}
    </div>
  );
}
