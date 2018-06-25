const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for (let i = 0; i < numberOfRows; i++) {
		let row = [];
		for (let j = 0; j < numberOfColumns; j++) {
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
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
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		//while loop overrides existing bombs
	};
	while (numberOfBombsPlaced < numberOfBombs) {
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		//while loop overrides existing bombs
	};
	board[randomRowIndex][randomColumnIndex] = 'B';
	numberOfBombsPlaced++ //Is this the right lexical place?

	return board;
}

