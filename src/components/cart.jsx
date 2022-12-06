import { useState } from "react";
import Item from "./item";

const Cart = () => {
  const [rows, setRows] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 4 },
    { id: 3, value: 1 },
  ]);

  const addRow = () => {
    const newRows = [...rows];
    let id;
    if (rows.length > 0) {
      const lastItem = rows[rows.length - 1];
      id = lastItem.id + 1;
    } else {
      id = 1;
    }
    // new obje { id: 4, value: 1 }
    const newObj = { id: id, value: 1 };
    // const item = rows.length + 1;
    newRows.push(newObj);
    setRows(newRows);
  };

  const removeRow = (id) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  };

  const handleIncreasment = (id) => {
    const newRows = [...rows];
    const index = rows.findIndex((row) => row.id === id);
    newRows[index].value = newRows[index].value + 1;
    setRows(newRows);
  };

  const handleDecreasement = (id) => {
    const newRows = [...rows];
    const index = rows.findIndex((row) => row.id === id);
    newRows[index].value = newRows[index].value - 1;
    setRows(newRows);
  };

  return (
    <>
      <button className="btn btn-success m-3" onClick={addRow}>
        add item
      </button>
      {rows.map((row, index) => (
        <Item
          key={index}
          value={row.value}
          id={row.id}
          removeRow={removeRow}
          handleIncreasment={handleIncreasment}
          handleDecreasement={handleDecreasement}
        />
      ))}
    </>
  );
};

export default Cart;
