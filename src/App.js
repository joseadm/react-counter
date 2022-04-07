import './style.css';
import React, { useState } from 'react';

export default function App() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');

  let addNewName = () => {
    setNames([...names, newName]);
    setNewName('');
  };

  let changeName = (event) => {
    setNewName(event.target.value);
  };

  let removeName = (index) => {
    var array = [...names];
    array.splice(index, 1);
    setNames(array);
  };

  return (
    <div>
      <input
        onChange={changeName}
        value={newName}
        className="name"
        placeholder="Name"
      />
      <button onClick={addNewName}>Add</button>
      <ul>
        {names.map((name, index) => (
          <li>
            {name}
            <button
              onClick={() => {
                removeName(index);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
