import { useState } from "react";

export default function Player({ initialname, symbol, isActive}) {
  const [playerName, setplayerName] = useState(initialname);
  const [isEdit, setisEdited] = useState(false);
  function handleClick() {
    setisEdited((editing) => !editing); // use the function if you want to change the state which depend on previous state value like true to false or false to true
  }
  function handlechange(event) {
    setplayerName(event.target.value);
  }

  let editablename = <span className="player-name">{playerName}</span>;
  if (isEdit) {
    editablename = (
      <input type="text" value={playerName} required onChange={handlechange} />
    );
  }
  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {editablename}  
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
