function WorkerFixedPayment(name,salaryRate) {
    this.name = name;
    this.salaryRate = salaryRate;

}
WorkerFixedPayment.prototype.getName = function () {
    return name;
};
WorkerFixedPayment.prototype.setName = function (name) {
this.name = name;
};

WorkerFixedPayment.prototype.fixedCalculate = function () {
return "I am " + this.name + " and my feed salary is " + "$" + this.salaryRate*12;
};

function WorkerPerHourPayment(name,hoursCount,hourRate) {
        this.name = name;
        this.hoursCount = hoursCount;
        var daysCount = 20;
        this.daysCount = daysCount;
        this.hourRate = hourRate;
        var monthsCount = 12;
        this.monthsCount = monthsCount;
}
WorkerPerHourPayment.prototype.getName = function () {
    return name;
};

WorkerPerHourPayment.prototype.setName = function (name) {
        this.name = name;
};
WorkerPerHourPayment.prototype.perHourPaymentCalculate = function () {
    return "I am " + this.name + " and my feed salary is " + "$" + this.hourRate*this.hoursCount*this.daysCount*this.monthsCount;
};
var personFixPayment = new WorkerFixedPayment("Sergey",3450);
console.log(personFixPayment.fixedCalculate());

var personPerHourPayment = new WorkerPerHourPayment("Evgeniy",7,5);
console.log(personPerHourPayment.perHourPaymentCalculate());