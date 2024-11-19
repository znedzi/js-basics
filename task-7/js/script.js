'use strict'

var cat1 = {
    name: 'Drakula',
    age: 7,
    'strings can be properties names': 'Hello',
    123: 123
}

console.log(cat1.name) //'Drakula'
console.log(cat1.age) // 7
console.log(['strings can be properties names']) //'Hello'

var stringPropertyName = 'strings can be properties names'
console.log(cat1[stringPropertyName]) // 'Hello'

console.log(cat1[123]) //123
console.log(cat1['123']) //123



console.log(cat1) // { ... }

console.log('---------------------------------');

var cat2= {}

console.log(cat2);

cat2.name = 'Puszek'
cat2.age = 3


console.log(cat2);







