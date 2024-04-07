const departmens: string[] = ["dev", "design", "marketing"];

const department = departmens[0];

// departments.push(5);
const report = departmens
            .filter(d => d !== 'dev')
            .map(d => `${d} - done`);

const nums: number[][] = [
    [3,5,6], 
    [3,5,6]
];

const [first] = report;
console.log(first);