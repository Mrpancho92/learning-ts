interface Icompany {
    name: string;
    debts: number;
    departments: Department[];
    management: {
        owner: string;
    };
}
interface Department {
    [key: string]: string;
}

// С помощью такого синтаксиса Indexed Access Types мы можем получать типы переменных в интерфейсах. 
// const debts = "debts"; 
// type CompanyDebtsType = Icompany[typeof debts];
// если let содание переменной то:
// let debts = "debts" as "debts"; // или:
let debts: "debts" = "debts";
type CompanyDebtsType = Icompany[typeof debts];
type CompanyNameType = Icompany["name"];
// type CompanyDebtsType = Icompany["debts"];
type CompanyOwnerType = Icompany["management"]["owner"];
type CompanyDepartsmentType = Icompany["departments"][number];
type CompanyDepartsmentTypes = Icompany["departments"];
type Test = Icompany[keyof Icompany];
