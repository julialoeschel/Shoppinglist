import "./listElement.css";

export default function ListElement({ onTab, item }) {
  return (
    <li class="listitem">
      {item.name.de}
      <button
        onClick={(event) => {
          event.preventDefault();
          onTab(item);
        }}
      >
        {" "}
        x{" "}
      </button>
    </li>
  );
}
