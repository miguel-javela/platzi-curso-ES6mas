//parametros por defecto
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

  // es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
  };
  
  newFunction2();
  newFunction2('Ricardo', '23', 'CO');

//concatenar  
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multilinea
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//desestructuracion
let person = {
  'name': 'oscar',
  'age': 32,
  'country': 'MX'
}

console.log(person.name, person.age);

let { name, age } = person;
console.log(name, age);

//spread operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);