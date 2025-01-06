class Factory {
    constructor() {
    }

    createEmployee(type) {

        var employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        }
        else {
            employee = new Temporary();
        }
        employee.type = type;
        employee.info = function () {
            console.log(this.type + " hourly price: " + this.hourly);
        };

        return employee;
    }
}

var FullTime = function(){
    this.hourly = "90₺";
}

var PartTime = function(){
    this.hourly = "75₺";
}

var Temporary = function(){
    this.hourly = "40₺";
}

var factory = new Factory();
var employees = [];
employees.push(factory.createEmployee("fulltime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("parttime"));

employees.forEach(emp => {
    emp.info();
});
