var triangle1Area = getTriangleArea(10,6);
var triangle2Area = getTriangleArea(12,7.2);
var triangle3Area = getTriangleArea(10,3);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		alert('Nieprawidłowe dane');
		console.log('Nieprawidłowe dane');
		return;
	}

	return a * h / 2;
}