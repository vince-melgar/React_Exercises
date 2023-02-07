import React, { useState } from "react";
import './App.css'

const ItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);
    setItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="form-control mb-2"
        placeholder="Add Item"
      />
      <button type="submit" className="btn btn-primary btn-block">
        Add Item
      </button>
    </form>
  );
};

const ItemList = ({ addItem }) => {
  const [items, setItems] = useState([]);

  const handleAddItem = (itemName) => {
    setItems([...items, { id: items.length + 1, name: itemName, count: 1 }]);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleIncrement = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleDecrement = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setItems(newItems);
  };

  const totalCount = items.reduce((acc, item) => acc + item.count, 0);

  const handleSelectItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="container mt-5 py-5">
      <ItemForm addItem={handleAddItem} />
      <ul className="list-group mt-3">
        {items.map((item) => (
          <li key={item.id} className={`list-group-item d-flex justify-content-between align-items-center ${item.selected ? 'selected' : ''}`}>
            <input type="radio" onClick={() => handleSelectItem(item.id)} />
            <span className={`item-name ${item.selected ? 'selected' : ''}`}>{item.name}</span>
            <button onClick={() => handleIncrement(item.id)} className="btn btn-warning btn-block">
              <i className="fas fa-play"></i>
            </button>
            <span className="mx-2">{item.count}</span>
            <button onClick={() => handleDecrement(item.id)} className="btn btn-warning btn-block">
              <i className="fas fa-play fa-flip-horizontal"></i>
            </button>

          </li>
        ))}
      </ul>
      <div className="text-center my-3">
        Total Items: <b>{totalCount}</b>
      </div>
    </div>
  );
};

export default ItemList;