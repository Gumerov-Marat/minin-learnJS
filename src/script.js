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


var input = document.querySelector('input')
//console.log(h1);
console.log(div.innerHTML);
//console.log(p);

div.innerHTML = '<h2 style="color:red;">javascript</h2>'
console.log(div.innerHTML);
console.log(div.textContent);
console.log(input.value);



