
class User01<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    }

    sayMyFullName<T>(surname: T): string {
        if (typeof surname !== "string") {
            return `I have only name: ${this.name}`;
        } else {
            return `${this.name} ${surname}`;
        }
    }
}

class AdminUser<T> extends User01<string, number> {
    rules: T;
    constructor(rules: T) {
        super('tttt', 50)
        this.rules = rules;
    }
    output<T>(rules: T): string {
        return `${this.name} ${this.age} ${this.rules}`
    }
}
const resClassAdminUser = new AdminUser('GAZ');
console.log(resClassAdminUser.output<number>(40));

const ivan = new User01("Ivan", 30);
console.log(ivan.sayMyFullName("Smith"));

const nameData = "Alex";
const ageData1 = 54;

const alex = new User01<string, number>(nameData, ageData1);

