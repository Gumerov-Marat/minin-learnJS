var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

var score = 0

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

// функция старта игры
function startGame() {
  $game.style.backgroundColor = '#fff'
  $start.classList.add('hide')
  score++
  renderBox()
}

function handleBoxClick(event){
  if(event.target.dataset){
    renderBox()
  }
  
}

// Создание квадрата
function renderBox() {
  $game.innerHTML = ''
  var box = document.createElement('div')

  box.style.height = box.style.width = '50px'
  box.style.position = 'absolute'
  box.style.backgroundColor = '#000'
  box.style.top = '50px'
  box.style.left ='70px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)
}