import { useState } from "react";
import { search } from "fast-fuzzy";
import "./search.css";
import ListElement from "./ListElement/Listelement";

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
      <form class="form">
        <label class="form__label" htmlFor="search">
          Was willst du einkaufen?
          <input
            class="form__input"
            id="search"
            type="search"
            autofocus
            onChange={(event) => handleChange(event.target.value)}
            value={input}
          ></input>
        </label>
        <ul class="form__ul">
          {results?.map((item) => (
            <ListElement key={item["_id"]}>{item.name.de}</ListElement>
          ))}
        </ul>
      </form>
    </>
  );
}
