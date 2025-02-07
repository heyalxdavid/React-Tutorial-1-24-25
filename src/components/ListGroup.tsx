import { useState } from "react";

// { items: [], heading: string}
interface Props {
  items: string[]; // array of strings
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); //-1 means no item is selected, setSelectedIndex is a function to update the state

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item} // unique key
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
