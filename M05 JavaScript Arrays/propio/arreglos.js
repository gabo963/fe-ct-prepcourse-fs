// Declaracion de arreglos

var colores = [];
colores = ['Amarillo', 'Azul'];
console.log(colores[0]);

// PUSH y UNSHIFT
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [1, 6, 8, 9, 43];
var cumplenCondicion = numeros.every((num) => { num > 5 });

console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var numeros = [1, 2, 3, 4];
numeros.forEach((num) => { console.log(num) })

// MAP
var numeros = [1, 2, 3, 4];
var masUno = numeros.map((num) => { return num + 1 });

console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// WHILE
var arr = [];
while (arr.length < 5) {
    arr.push('Camilo');
}
console.log(arr);