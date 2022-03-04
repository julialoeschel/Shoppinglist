import { useEffect } from "react";

export default function Fetch() {
  useEffect(() => {
    fetch("https://fetch-me.vercel.app/api/shopping/items")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <span>fetch successfull</span>
    </>
  );
}
