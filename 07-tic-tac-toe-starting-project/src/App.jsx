import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './Log';

function App() {
	const [ gameTurns, setGameTurns ] = useState([]);
	const [ activePlayer, setActivePlayer ] = useState("X");

	function handleSelectSquare(rowIndex, colIndex) {
		setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
		setGameTurns((prevTurns) => {
			let currentPlayer = "X";

			if (prevTurns.length > 0 && prevTurns[0].player === "X") {
				currentPlayer = "O";
			}

			const updatedTurns = [
				{ 
					square: {
						row: rowIndex,
						col: colIndex,
					},
					player: currentPlayer,
				}, 
				...prevTurns
			];

			return updatedTurns;
		});
	}

	return (
		<>
			<header>
				<img src="game-logo.png" alt="Tic Tac Toe image" />
				<h1>React Tic-Tac-Toe</h1>
			</header>
			<main>
				<div id="game-container">
					<ol id="players" className='highlight-player'>
						<Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
						<Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
					</ol>
					<GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
				</div>

				<Log log={} />
			</main>
		</>
	);
}

export default App;