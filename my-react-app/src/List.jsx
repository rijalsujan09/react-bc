import PropTypes from "prop-types";

function List(props) {
  // const fruits = [{id:1, name:'apple',calories:95},
  //                 {id:2,name:'orange',calories:45},
  //                 {id:3,name:'banana',calories:105},
  //                 {id:4,name:'mango',calories:159},
  //                 {id:5,name:'lychee',calories:37}
  //             ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabrtical
  // fruits.sort((b, a) => a.name.localeCompare(b.name)); // Reverse Alphabetical

  // fruits.sort((a, b) => a.calories - b.calories); // Numeric
  // fruits.sort((a, b) =>b.calories - a.calories); // Reverse Numeric

  // const lowCalFruits = fruits.filter((fruits) => fruits.calories<100);
  // const highCalFruits = fruits.filter((fruits) => fruits.calories>100);

  const itemList = props.items;
  const category = props.category;

  const listItem = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; calories : {item.calories}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItem}</ul>
    </>
  );
}

List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Items",
  items: [],
};

export default List;
