import "./App.css";

import Search from "./Search/Search";
import ShoppingList from "./ShoppingList/ShoppingList";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(["one", "two"]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(shoppingList);

  return (
    <>
      <ShoppingList></ShoppingList>
      <Search
        fetchedItems={data}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      ></Search>
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
