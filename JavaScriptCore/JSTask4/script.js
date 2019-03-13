function task1() {
var user = {};
    user.name = 'ПИЛИП';
    user.surname = 'ШЕВЧЕКО';
    user.name = 'СЕРГІЙ';
    delete user.name;
    for (var prop in user) {
        console.log( prop); // name, surname
    }
}
function task2() {

    var employeeSalaries = {
        "Олексій": 100,
        "Андрій": 300,
        "Світлана": 250,
        "Дарина": 125
    };

    var sum = 0;
    for (var name in employeeSalaries) {
        sum += employeeSalaries[name];
    }

    alert( sum );
}
