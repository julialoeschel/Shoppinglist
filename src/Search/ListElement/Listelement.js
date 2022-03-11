import "./listElement.css";

export default function ListElement({ onTab, item }) {
  return (
    <li
      class="listitem"
      onClick={() => {
        onTab(item);
      }}
    >
      {item.name.de}
    </li>
  );
}
