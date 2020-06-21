//делигирование

/*
  мы можем ставить прослушку события на каждый элемент,но можем...
*/

var p = document.querySelectorAll('p')

for (var i = 0; i < p.length; i++){
  p[i].addEventListener('click', function(event){
    event.target.style.color = 'blue'
  })
};

/*
  ищем внутри wrapper  по тегу p
*/

document.getElementById('wrapper').addEventListener('click', function(event){
  var tagname = event.target.tagName.toLowerCase();

  if (tagname === 'p') {
    event.target.style.color = 'blue'
  }
  // те у кого класс колор
  if (event.target.classList.contains('color')){
    event.target.style.color = 'red'
  }
})