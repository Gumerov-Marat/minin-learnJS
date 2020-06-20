var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

// добавление класса
box1.classList.add('red')

//удаление класса
box2.classList.remove('blue')


// есть ли определенный клас у элемента?
var hasclass = box2.classList.contains('blue')
console.log(hasclass);


