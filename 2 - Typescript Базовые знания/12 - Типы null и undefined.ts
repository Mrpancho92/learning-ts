const test: null = null;
const test2: any = null;
// const test3: string = null;
// const test4: number = null;

const test5: undefined = undefined;
const test6: any = undefined;
// const test7: string = undefined;

// Если отключить проверку strictNullChecks в tsconfig.json то переменным можно будет назначать разные типы при значении null и undefined.
// Если написать let smth; - то по умолчанию smth будет any.


function getRndData() {
    if (Math.random() < 0.5) {
        return null;
    } else {
        return "  Some data  ";
    }
}
 const data = getRndData();
 const trimmedData = data ? data.trim() : null;