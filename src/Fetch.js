import { useEffect, useState } from "react";

export default function Fetch() {
  const [data, setData] = useState(["one", "two"]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <span>fetch successfull</span>
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
