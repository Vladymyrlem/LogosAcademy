function show(data) {
    console.log(data);
}
function Person(name,age){

    this.name = name;
    this.age = age;
}
Person.prototype.setName = function(name){
this.name = name;
};
Person.prototype.getName = function(){
    return name;
};
Person.prototype.setAge = function(age){
    this.age = age;
};
Person.prototype.getAge = function(){
    return age;
};
let Vladislav = new Person( "Vladislav", 17);
let Johanna = new Person( "Johanna",  18);
let Eugenie = new Person( "Eugenie",  36);
let Andrey = new Person("Andrey",19);
let Anna = new Person("Anna", 45);


let myMap = new Map;
myMap.set(1,Vladislav);
myMap.set(2,Johanna);
myMap.set(3,Eugenie);
myMap.set(4,Andrey);
myMap.set(5,Anna);
// myMap.forEach(function(value, key) {
//     console.log(key , value);
// });
// for (var i = 0; i < myMap.size; i++){
//
// }
function getResult() {
     myMap.forEach(function(value, key) {
     console.log(key,value);
 });
}