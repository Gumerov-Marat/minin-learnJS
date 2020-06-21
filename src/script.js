var str = '1,2,3,4,5,6,7,8'

// сплит с сепаратором ,
var array = str.split(',')
console.log(array);

// обратное действие
//array.join(';');

var objArr = [
  {name:'Max', age: 27},
  {name: 'Elena', age: 18},
  {name: 'Victor', age: 20}
]

var foundPerson = objArr.find(function(person){
  return person.age ===20
})

console.log(foundPerson);
