const message: string | number = 5;

const nessages: string[] | number[] = ['e', 'r'];

// function printMsg(msg: string | number): void {
//     if (typeof msg === 'string') {
//         console.log(msg.toLowerCase());
//     } else {
//         console.log(msg.toExponential());
//     }
// }
// printMsg(4);
// printMsg('fdfdfd');
// function printMsg(msg: string | number | boolean): void {
//     if (typeof msg === 'string' || typeof msg === 'number') {
//         console.log(msg.toString());
//     } else {
//         console.log(msg);
//     }
// }
function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m));
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed());
    } else {
        console.log(msg);
    }
}

const printReadings = (a: number | string, b: number | boolean) => {
    if (a === b) {
        console.log(a, b);
    }
}

const printReadings2 = (a: number[] | string) => {
  console.log(a.slice(0,3));
}   

function checkreadings (readings: {system: number} | {user: number}) : void {
    if ('system' in readings) {
        console.log(readings.system);
    } else {
        console.log(readings.user);
    }
}
// Если работаем с классами то можно проверить является ли экземпляр потомком этого класса с помощью instanceof.
function logValue(x: string | Date  ) {
    if (x instanceof Date) {
        console.log(x.getDate());
    } else {
        console.log(x.trim());
    }
} 