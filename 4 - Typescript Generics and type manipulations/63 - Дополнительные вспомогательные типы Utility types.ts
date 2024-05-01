function calculate(a: number, b: number): number {
    return a * b;
}

// ReturnType - получить тип возвращаемого значения функции.
type CalculateRT = ReturnType<typeof calculate>;

let anotherRes: CalculateRT = 5;

// Parameters - вернет кортеж значений типов параметров функции.
type CalculatePT = Parameters<typeof calculate>
// type CalculatePT = Parameters<typeof calculate>[0] - можно выбрать конкретный параметр

type PT1 = Parameters<(a: number) => number>; // можно писать так
type PT2 = Parameters<<T>(arg: T) => T>;  // вернет [arg: unknown] 

class Example {
    constructor(a: number) {}
}
type T00 = ConstructorParameters<typeof Example>; // вернет параметры конструктора класса  