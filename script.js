// Question 1
class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    get totalIncome() {
        return this.incomes.reduce((previousValue, nowVal)=> previousValue + nowVal.amount,0)
    }
   get totalExpense() {
        return this.expenses.reduce((previousValue, nowVal)=> previousValue + nowVal.amount,0)
    }
    addIncome(amount, description) {
        this.incomes.push({
            amount,
            description,
        })
    }
    get accountBalance() {
        return this.totalIncome - this.totalExpense
    }
    addExpense(amount, description) {
        this.expenses.push({
            amount,
            description
        })
    }
}

const sabirAccount = new PersonAccount("Sabir", "Hussain", [],[]);
sabirAccount.addExpense(500, "Birtani");
sabirAccount.addIncome(24000, "Salary");
console.log(sabirAccount.accountBalance);
console.log(sabirAccount.totalIncome);
console.log(sabirAccount.totalExpense);
console.log(sabirAccount)

// Question 2
class Automobile {
    constructor(car, truck, bus) {
        this.car = car
        this.truck = truck
        this.bus = bus
    }
}

// Question 3
class Car extends Automobile {
    constructor(car, truck, bus, carname, carmodel, cardoor, carmaxspeed, carminispeed) {
        super(car, truck, bus)
        this.carname = carname
        this.carmodel = carmodel
        this.cardoor = cardoor
        this.carmaxspeed = carmaxspeed
        this.carminispeed = carminispeed
    }
}
class Truck extends Car {
    constructor(car, truck, bus, carname, carmodel, cardoor, carmaxspeed, carminispeed, truckname, truckmodel, truckdoor, truckmaxspeed, truckminispeed) {
        super(car, truck, bus, carname, carmodel, cardoor, carmaxspeed, carminispeed)
        this.truckname = truckname
        this.truckmodel = truckmodel
        this.truckdoor = truckdoor
        this.truckmaxspeed = truckmaxspeed
        this.truckminispeed = truckminispeed
    }
}
class Bus extends Truck {
    constructor(car, truck, bus, carname, carmodel, cardoor, carmaxspeed, carminispeed, truckname, truckmodel, truckdoor, truckmaxspeed, truckminispeed, busname, busmodel, busdoor, busmaxspeed, busminispeed) {
        super(car, truck, bus, carname, carmodel, cardoor, carmaxspeed, carminispeed, truckname, truckmodel, truckdoor, truckmaxspeed, truckminispeed)
        this.busname = busname
        this.busmodel = busmodel
        this.busdoor = busdoor
        this.busmaxspeed = busmaxspeed
        this.busminispeed = busminispeed
    }


}
let detail = new Bus("lamborgini", "myTruck", "myBus", "corolla", 2022, 2, "200km", "150km", "oil", 2022, 1, 250, 170, "meez2", 2026, 3, 400, 690)
console.log(detail)