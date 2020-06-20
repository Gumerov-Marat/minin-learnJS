// //задание 1 Доступ к элементам
// var div = document.getElementById('playground');

// var p = document.getElementsByClassName('text');

// var h1 = document.getElementsByTagName('h1');


// console.log(h1);
// console.log(div);
// console.log(p);

//более новые методы

// id из css = #id
var div = document.querySelector('#playground');
var p = document.querySelectorAll('.text')
var h1 = document.querySelectorAll('h1')

console.log(h1);
console.log(div);
console.log(p);

