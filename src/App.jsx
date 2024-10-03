import { EntryBlock } from "./components/NewEntryBlock/EntryBlock";
import { Journal } from "./components/Journal/Journal";
import { useState } from "react";
import "./app.scss";

function App() {
  const [data, setData] = useState(Object.keys(localStorage).length);

  return (
    <div className="app">
      <EntryBlock data={data} setData={setData} />
      <Journal data={data} />
    </div>
  );
}

export default App;
