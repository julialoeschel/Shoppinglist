import "./App.css";

import Search from "./Search";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(["one", "two"]);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <Search fetchedItems={data}></Search>
    </>
  );

  async function fetchData() {
    const response = await fetch(
      "https://fetch-me.vercel.app/api/shopping/items"
    );
    const newdata = await response.json();
    if (response.status === 200) {
      setData(newdata.data);
    } else {
      console.error("fetch went wrong");
    }
  }
}

export default App;
