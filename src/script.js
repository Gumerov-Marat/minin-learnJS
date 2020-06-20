var a = document.querySelector('a')

// получаем атрибут сылки href через команду гет Атрибут
console.log(a.getAttribute('href'));

var oldHref = a.getAttribute('href')

console.log(a.getAttribute('title'));

// также мы можем обратиться к объекту у Ноды - атрибьютс
console.log(a.attributes);

// меняем ссылку

a.setAttribute('href', 'https://ya.ru')

a.textContent = "yandex"