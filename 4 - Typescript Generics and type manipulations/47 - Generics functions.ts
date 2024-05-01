// function processingData<T, S>(data: T[], options: S): string {
//     switch (typeof data) {
//         case 'string':
//             return `${data}, speed: ${options}`;
//             break;
//         case 'number':
//             return `${data}, speed: ${options}`;
//             break;
//         default:
//             return "Not valid";
//     }
// }

// let res10 = processingData([1], "fast");
// let res11 = processingData(["1"], "slow");
// const res12 = processingData<number, string>([10], "slow");

// function processing<T>(data: T): T {
//     return data;
// }
// interface ProcessingFn {
//     <T>(data: T): T
// }
//     let newFunc: ProcessingFn = processing;
// interface DataSaver {
//     processing: ProcessingFn
// }
// const saver: DataSaver = {
//     // processing(data) {
//     //     console.log(data);
//     //     return data;
//     // }
//     processing: processing
// }