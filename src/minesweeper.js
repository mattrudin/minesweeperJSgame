class Game {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._board = Board(numberOfRows, numberOfColumns, numberOfBombs);
	}

	playMove(rowIndex, columnIndex) {
		this._board.flipTile(rowIndex, columnIndex);
		if (this.board.playerBoard[rowIndex][columnIndex] === 'B') {
			console.log('Game Over');
			this._board.printBoard();
		} else if (!this._board.hasSafeTiles) {
			console.log('You won!');
		} else {
			console.log('Current Board:')
			this._board.printBoard();
		}
	}
}



class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = numberOfRows * numberOfColumns;
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
	}

	get playerBoard() {
		return this._playerBoard;
	}

	flipTile = function(rowIndex, columnIndex) {
		if (this._playerBoard[rowIndex][columnIndex] != ' ') {
			console.log('This tile has already been fliped!');
			return;
		} else if (this._bombBoard[rowIndex][columnIndex] == 'B') {
			this._playerBoard[rowIndex][columnIndex] = 'B';
		} else {
			this._playerBoard[rowIndex][columnIndex] = this._getNumberOfNeighborBombs(rowIndex, columnIndex);
		}
		this._numberOfTiles--;
	}

	getNumberOfNeighborBombs = function(rowIndex, columnIndex) {
	const neighborOffsets = [[-1,-1], [-1,0], [-1,1], 
							 [0,-1], 		  [0,1],
							 [1,-1],  [1,0],  [1,1]];
	const numberOfRows = this._bombBoard.length;
	const numberOfColumns = this._bombBoard[0].length;
	let numberOfBombs = 0;
	neighborOffsets.forEach(offset => {const neighborRowIndex = rowIndex + offset[0];
									const neighborColumnIndex = columnIndex + offset[1];
									if (neighborRowIndex >= 0 && 
										neighborRowIndex < numberOfRows &&
										neighborColumnIndex >= 0 &&
										neighborColumnIndex < numberOfColumns) {
											if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
												numberOfBombs++;
											} 
									}
									});
	return numberOfBombs;
	}

	hasSafeTiles = function() {
		return this._numberOfTiles !== this._numberOfBombs;
	}

	printBoard(board) {
		console.log(board.map(row => row.join(' | ')).join('\n'));
	}

	static generatePlayerBoard = function(numberOfRows, numberOfColumns) {
		let board = [];
		for (let i = 0; i < numberOfRows; i++) {
			let row = [];
			for (let j = 0; j < numberOfColumns; j++) {
				row.push(' ');
			}
			board.push(row);
		}
		return board;
	}

	static generateBombBoard = function(numberOfRows, numberOfColumns, numberOfBombs) {
		let board = [];
		for (let i = 0; i < numberOfRows; i++) {
			let row = [];
			for (let j = 0; j < numberOfColumns; j++) {
				row.push(null);
			}
			board.push(row);
		}
		let numberOfBombsPlaced = 0;
		while (numberOfBombsPlaced < numberOfBombs) {
			let randomRowIndex = Math.floor(Math.random() * numberOfRows); //while loop overrides existing bombs
			let randomColumnIndex = Math.floor(Math.random() * numberOfColumns); //while loop overrides existing bombs
			if (board[randomRowIndex][randomColumnIndex] !== 'B') {
				board[randomRowIndex][randomColumnIndex] = 'B';
				numberOfBombsPlaced++;
			} 
		};
		return board;
	}

}



const g = new Game(3,3,3);
g.playMove(0,0);




/*
//Setup
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

//PlayerBoard
console.log('Player board:');
printBoard(playerBoard);

//BombBoard
console.log('Bomb board:');
printBoard(bombBoard);

//Updated PlayerBoard
flipTile(playerBoard, bombBoard, 1, 0);
console.log('Updated player board:');
printBoard(playerBoard);*/