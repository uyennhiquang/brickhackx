import "../assets/styles/reset.css";
import "../assets/styles/styles.css";

for(let i = 0; i <= 10; i++){
    console.log(i)
}

let user = {
    name : "John",
    age: 34
}

console.log(user.name);

class Car{
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name; 
        this.price = price;
    }

    getName(): string{
        return this.name;
    }
}

const aCar = new Car("hyundai", 89000);
console.log(aCar.name);

