import "./listElement.css";

export default function ListElement({ key, children }) {
  return <li class="listitem">{children}</li>;
}
