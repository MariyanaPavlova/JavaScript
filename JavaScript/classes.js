class Student { //класа е шаблон по който се изграждат мн.на бр.обекти
    constructor(name) {
        this.name = name
    }

}
let Student = new Student('Peter', 5.50); 
//нов ел.от шаблона Студент


//
class Vehicle {

    #parts = {}

    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    drive(amount){
        this.fuel -= amount;
    }

    //Getter
    set parts(value){ 
        this.#parts = {
            engine: value.engine,
            power: value.power,
            quality: value.engine * value.power
        }
    //Setter
    }
    get parts(){
        return this.#parts
    }

    
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
