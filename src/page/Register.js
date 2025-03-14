import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [items, setItems] = useState([
    { name: "Apple", weight: "1", unit: "kg", type: "Fruit" },
    { name: "Orange", weight: "2", unit: "kg", type: "Fruit" },
    { name: "Milk", weight: "1", unit: "liter", type: "Dairy" },
    { name: "Tomato", weight: "1.5", unit: "kg", type: "Vegetable" },
    { name: "Carrot", weight: "1", unit: "kg", type: "Vegetable" }
  ]);
  const [input, setInput] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");
  const [type, setType] = useState("Fruit");

  const addItem = (e) => {
    e.preventDefault();
    if (input.trim() && weight.trim()) {
      setItems([...items, { name: input, weight, unit, type }]);
      setInput("");
      setWeight("");
      setUnit("kg");
      setType("Fruit");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="register-page">
      <div className="contain">
        <header className="header">
          <h1 className="title">Billing Quantity - {items.length} items</h1>
        </header>
        <main className="main-content">
          <form className="form" onSubmit={addItem}>
            <input
              type="text"
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter grocery item name"
              aria-label="Grocery item"
            />
            <input
              type="number"
              className="input weight-input"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Amount"
              aria-label="Weight or volume"
            />
            <select
              className="input unit-select"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="kg">kg</option>
              <option value="liter">liter</option>
            </select>
            <select
              className="input type-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Dairy">Dairy</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit" className="button">Add</button>
          </form>
          <ul className="list scrollable-list">
            {items.map((item, index) => (
              <li key={index} className="list-item">
                {item.name} - {item.weight} {item.unit} ({item.type})
                <button onClick={() => removeItem(index)} className="remove-btn">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Register;