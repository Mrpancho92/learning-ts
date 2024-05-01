interface ICompany {
    name: string;
    debts: number;
}

// Оператор keyof можно применять к interface, type и к классам(получим все публичные свойства класса которые доступны с наружи)
type CompanyKeys = keyof ICompany; // keyof позволяет нам получать ключи указанного объекта и в итоге образует union type между литералами строк.
const keys: CompanyKeys = 'debts';
// const keys: CompanyKeys = 'nae'; // ошибка 

function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S
) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}
const hh: ICompany = {
    name: "HH",
    debts: 500000
};
printDebts(hh, 'name', 'debts');
// Теперь функцию printDebts можно применять к абсолютно любому объекту
const google = {
    name: 'Google',
    open: 'true'
}
printDebts(google, 'name', 'open');
