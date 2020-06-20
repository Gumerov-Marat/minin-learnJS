var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')


// создаем функцию для события (что должно произойти)
function buttonhandler() {
  //console.log('clicked!')
  h1.textContent = input.value;
}

// добавляем событие на кнопку
//button.addEventListener('click', buttonhandler)

// реализация с анонимной функцией
h1.addEventListener('mouseenter',function () {
  console.log('Мышка зашла в заголовок h1');
  this.style.color = 'red'
})

h1.addEventListener('mouseleave', function () {
  console.log('Мышка ушла с  h1');
  this.style.color = 'black'

})