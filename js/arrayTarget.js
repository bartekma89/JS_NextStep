var femaleNames = ['Basia', 'Zosia', 'Ola', 'Kasia', 'Hania'];

var maleNames = ['Bartek', 'Karol', 'Marcin', 'Damian', 'Tomek'];

var allNames = femaleNames.concat(maleNames);

allNames.push('Kacper');

allNames.push('Martyna');

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

console.log(allNames);