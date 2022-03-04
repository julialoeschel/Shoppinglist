import { useState } from "react";
import { search } from "fast-fuzzy";

export default function Search({ fetchedItems }) {
  const [input, setInput] = useState([]);
  const [results, setResults] = useState([]);

  function handleChange(value) {
    setInput(value);

    const results = search(value, fetchedItems, {
      keySelector: (obj) => obj.name.de,
    });
    console.log(results);
    setResults(results);
  }

  return (
    <>
      <form>
        <label htmlFor="search">
          Einkausfliste:
          <input
            id="search"
            type="search"
            autofocus
            onChange={(event) => handleChange(event.target.value)}
            value={input}
          ></input>
        </label>
        <ul>
          {results?.map((item) => (
            <li key={item["_id"]}>{item.name.de}</li>
          ))}
        </ul>
      </form>
    </>
  );
}
