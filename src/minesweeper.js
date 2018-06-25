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

console.log(generatePlayerBoard(3,3));
console.log(generatePlayerBoard(3,4));
console.log(generatePlayerBoard(5,3));
