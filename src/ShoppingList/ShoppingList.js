import ListElement from "../ListElement/Listelement";
import "./shoppingList.css";

export default function ShoppingList({ List, onDelete }) {
  return (
    <>
      <h2>Shoppinglist</h2>
      <div class="shoppingItemsContainer">
        {List.map((item) => (
          <ListElement
            item={item}
            onTab={() => onDelete(item._id)}
          ></ListElement>
        ))}
      </div>
    </>
  );
}
