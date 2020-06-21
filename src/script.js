document.querySelector('#alert').addEventListener('click', function(){
  alert('Вы успешно кликнули по кнопке');
  
})

document.querySelector('#confirm').addEventListener('click', function () {
  var decision = confirm('Вы успешно кликнули по кнопке');
  console.log(decision);
  

})