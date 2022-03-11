import ListElement from "../ListElement/Listelement";
import "./shoppingList.css";

export default function ShoppingList({ List, onDelete }) {
  let fruits = [];
  let bread = [];

  List.forEach((element) => {
    if (element.category._ref === "c2hvcHBpbmcuY2F0ZWdvcnk6MA==") {
      fruits.push(element);
    }
    if (element.category._ref === "c2hvcHBpbmcuY2F0ZWdvcnk6MQ==") {
      bread.push(element);
    }
  });

  return (
    <div className="list">
      <h2>Shoppinglist</h2>
      <div className="container">
        {fruits.length > 0 && (
          <div class="shoppingItemsContainer">
            <h3>Obst und Gemüse</h3>
            {fruits.map((item) => (
              <ListElement
                key={item._id}
                item={item}
                onTab={() => onDelete(item._id)}
              ></ListElement>
            ))}
          </div>
        )}

        {bread.length > 0 && (
          <div class="shoppingItemsContainer">
            <h3>Brot</h3>
            {bread.map((item) => (
              <ListElement
                key={item._id}
                item={item}
                onTab={() => onDelete(item._id)}
              ></ListElement>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
