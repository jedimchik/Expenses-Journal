import { useFormik } from "formik";
import styles from "./EntryBlock.module.scss";

function EntryBlock({ data, setData }) {
  const formik = useFormik({
    initialValues: {
      date: "",
      value: "",
      category: "",
      planned: false,
      note: "",
    },

    onSubmit: (values) => {
      console.log(values);
      setData(data + 1);
      const key = JSON.stringify(new Date().toISOString());
      localStorage.setItem(key, JSON.stringify(values));

      // reset values onClick
      formik.setValues({
        date: "",
        value: "",
        category: "",
        planned: false,
        note: "",
      });
    },
  });

  return (
    <div>
      <form className={styles.container} onSubmit={formik.handleSubmit}>
        <section>
          <input
            required
            type="date"
            name="date"
            id="date"
            value={formik.values.date}
            onChange={formik.handleChange}
          />

          <input
            required
            type="number"
            step={0.01}
            min="0"
            name="value"
            id="value"
            value={formik.values.value}
            onChange={formik.handleChange}
            placeholder="enter $ value"
          />
          <select
            required
            name="category"
            id="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            <option hidden value="">
              select a category
            </option>
            <option>Food</option>
            <option>Entertainment</option>
            <option>Shopping</option>
            <option>Medicine</option>
            <option>other</option>
          </select>

          <div>
            <label htmlFor="category">Planned:</label>
            <input
              type="checkbox"
              name="planned"
              id="planned"
              checked={formik.values.planned}
              value={formik.values.planned}
              onChange={formik.handleChange}
            />
          </div>

          <input
            maxLength={16}
            type="text"
            id="note"
            name="note"
            value={formik.values.note}
            onChange={formik.handleChange}
            placeholder="note: utilities"
          />
        </section>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
export { EntryBlock };
