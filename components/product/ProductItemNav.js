import styles from "../../styles/ProductItemNav.module.css";

export default function ProductItemNav({ links, selected, setSelected }) {
  return (
    <div className={styles.container}>
      <ul>
        {links.map((l, i) => (
          <li key={l.name} onClick={(e) => setSelected(i)}>
            {l.name}
          </li>
        ))}
      </ul>
      <div
        className={styles.underline}
        style={{
          width: `${100 / links.length}%`,
          left: `${(100 / links.length) * selected}%`,
        }}
      />
    </div>
  );
}
