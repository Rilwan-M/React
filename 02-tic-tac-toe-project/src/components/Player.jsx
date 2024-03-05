//this is to display each player

import { useState } from "react";

export default function Player({
  player,
  symbol,
  isActive,
  onPlayerNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    }
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  let playerInput = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerInput = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleInputChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {playerInput}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
