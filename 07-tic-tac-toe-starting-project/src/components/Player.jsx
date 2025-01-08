import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleButton() {
        if (isEditing) {
            setIsEditing(() => {
                return false;
            });
        }
        else {
            setIsEditing(() => {
                return true;
            });
        }
    }

    function handleTyping(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player-info">
                { isEditing 
                    ? <input type="text" required value={playerName} onChange={handleTyping} />
                    : <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleButton}>{isEditing ? "SAVE" : "EDIT"}</button>
        </li>
    );
}