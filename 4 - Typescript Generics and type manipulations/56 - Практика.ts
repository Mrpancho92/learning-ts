interface IPhone {
    company: string;
    number: number;
}

// IMobilePhone должен наследоваться от IPhone,
// тип свойства companyPartner зависит от свойства company

interface IMobilePhone extends IPhone {
    size: string;
    companyPartner: IPhone["company"];
    manufactured: Date;
}

// Типизировать объект phones

const phones: IMobilePhone[] = [
    {
        company: "Nokia",
        number: 1285637,
        size: "5.5",
        companyPartner: "MobileNokia",
        manufactured: new Date("2022-09-01"),
    },
    {
        company: "Samsung",
        number: 4356637,
        size: "5.0",
        companyPartner: "SamMobile",
        manufactured: new Date("2021-11-05"),
    },
    {
        company: "Apple",
        number: 4552833,
        size: "5.7",
        companyPartner: "no data",
        manufactured: new Date("2022-05-24T12:00:00"),
    },
];
const phones2 = [
    {
        // company: "Nokia",
        // number: 1285637,
        size: "5.5",
        companyPartner: "MobileNokia",
        manufactured: new Date("2022-09-01"),
    },
    {
        // company: "Samsung",
        // number: 4356637,
        // size: "5.0",
        // companyPartner: "SamMobile",
        // manufactured: new Date("2021-11-05"),
    },
    {
        company: "Apple",
        number: 4552833,
        // size: "5.7",
        companyPartner: "no data",
        manufactured: new Date("2022-05-24T12:00:00"),
    },
];
const phones3 = [
    {
        company: "Nokia",
        number: 1285637,
        size: "5.5",
        companyPartner: "MobileNokia",
        manufactured: new Date("2022-09-01"),
        newPropies: '34443'
    },
    {
        company: "Samsung",
        number: 4356637,
        size: "5.0",
        companyPartner: "SamMobile",
        manufactured: new Date("2021-11-05"),
    },
    {
        company: "Apple",
        number: 4552833,
        size: "5.7",
        companyPartner: "no data",
        manufactured: new Date("2022-05-24T12:00:00"),
    },
];
// Мое решение:

// interface IPhonesManufacturedAfterDate extends IMobilePhone {
//     initialDate?: string;
// }

// // Функция должна отфильтровать массив данных и вернуть новый массив
// // с телефонами, выпущенными после даты в третьем аргументе

// function filterPhonesByDate<T extends IPhonesManufacturedAfterDate[], K extends keyof IMobilePhone>(
//     phones: T,
//     key: K,
//     initial: string
// ): IPhonesManufacturedAfterDate[] {
//     const newArr = phones.filter(item => {
//         if (new Date(item[key]).getTime() > new Date(initial).getTime()) {
//             item.initialDate = initial;
//             return item
//         }
//     })
//     return newArr
// }

// // Второй аргумент при вызове функции должен быть связан с первым,
// // а значит мы получим подсказки - свойства этого объекта

// console.log(filterPhonesByDate(phones, 'manufactured', "2022-01-01"));




// *********************
// Ответ:

interface IPhonesManufacturedAfterDate extends IMobilePhone {
    initialDate: string;
}

// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе


// 1 вариант решения: Не всегда нужно пихать дженерики ))) такой же как и 3 вариант только без джененрика.
function filterPhonesByDate(
    phones: IMobilePhone[],
    key: keyof IMobilePhone,
    initial: string
): IPhonesManufacturedAfterDate[] {
    return phones.filter(phone => {
        const manufactured = phone[key];
        if (manufactured instanceof Date &&
            manufactured.getTime() > new Date(initial).getTime()) {
            return phone
        }
    }).map(phone => {
        const newObj = { ...phone, initialDate: initial };
        return newObj;
    })
}

// 2 вариант решения (тут на вход любой объект и на выходе тоже нет ограничений за счет Partial):
// function filterPhonesByDate<T>(
//     phones: T[],
//     key: keyof T,
//     initial: string
// ): Partial<IPhonesManufacturedAfterDate>[] {
//     return phones.filter(phone => {
//         const manufactured = phone[key];
//         if (manufactured instanceof Date &&
//             manufactured.getTime() > new Date(initial).getTime()) {
//             // phone.initialDate = initial;
//             return phone
//         }
//     }). map(phone => {
//         const newObj = {...phone, initialDate: initial};
//         return newObj; 
//     })
// }

// 3 вариант решения - Если все таки нужны ограничения на входе (не менее тех свойств на вход которые указаны в интерфейсе IMobilePhone):
// function filterPhonesByDate<T extends IMobilePhone>(
//     phones: T[],
//     key: keyof T,
//     initial: string
// ): IPhonesManufacturedAfterDate[] {
//     return phones.filter(phone => {
//         const manufactured = phone[key];
//         if (manufactured instanceof Date &&
//             manufactured.getTime() > new Date(initial).getTime()) {
//             // phone.initialDate = initial;
//             return phone
//         }
//     }).map(phone => {
//         const newObj = { ...phone, initialDate: initial };
//         return newObj;
//     })
// }


// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта

console.log(filterPhonesByDate(phones3, 'manufactured', "2022-01-01"));