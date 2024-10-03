import { RecordEntry } from "../RecordEntry";
import styles from "./Journal.module.scss";

function Journal({ data }) {
  // console.log("data from local stroage", data);

  let recordArray = [];
  let recordKeys = Object.keys(localStorage);
  let recordArrayLen = recordKeys.length;

  while (recordArrayLen--) {
    recordArray.push(localStorage.getItem(recordKeys[recordArrayLen]));
  }

  return (
    <div className={styles.journal}>
      <h3>Number of records {data}</h3>
      <div className={styles.headings}>
        <span>Date</span>
        <span>Price</span>
        <span>Category</span>
        <span>Planned</span>
        <span>Comment</span>
      </div>

      {recordArray.length > 0
        ? recordArray.map((item) => {
            item = JSON.parse(item);
            return <RecordEntry key={Math.random(100)} item={item} />;
          })
        : null}
    </div>
  );
}

export { Journal };
