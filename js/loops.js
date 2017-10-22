drawTreeV1(5);
drawTreeV2(5);

function drawTreeV1(row) {

	for (var i = 0, star; i < row; i++) {
		star = '';
		for (var j = 0; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}

function drawTreeV2(row) {
	for (var i = 0, star = ''; i <= row; i++, star += '*') {
		console.log(star);
	}
}
