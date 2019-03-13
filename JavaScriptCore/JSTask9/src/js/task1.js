function show(data) {
    console.log(data);
}
let Student =[];
Student[0] ={name: "Sergey",sex: 'male', age: 17};
Student[1] ={name: "Johanna",sex: 'female', age: 18};
Student[2]={name: "Eugenie",sex:'male',age: 36};
Student[3]={name:"Andrey",sex:'male',age: 19};
Student[4]={name:"Anna",sex: 'female',age: 45};

// Student.forEach(show);

let filtered = Student.filter(function(el) {
    if(el.sex === "male") {
        return el.age < 21;
    }
}).map(function (yearsUnderAge) {
    return 21 - yearsUnderAge.age;
});
function compareAge(ageA,ageB) {
  return ageA.age - ageB.age;
}
function compareName(nameA,nameB){
    return nameA.name - nameB.name;
}
filtered.sort(compareAge);
filtered.sort(compareName);
filtered.forEach(show);

