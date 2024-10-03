import styles from "./RecordEntry.module.scss";

function RecordEntry({ item }) {
  return (
    <div key={String(Math.random(100))} className={styles.recordEntry}>
      <span>{item.date}</span>
      <span>${item.value}</span>
      <span>{item.category}</span>
      <span>{item.planned ? "yes" : "no"}</span>
      <span>{item.note || "---"}</span>
    </div>
  );
}

export { RecordEntry };
