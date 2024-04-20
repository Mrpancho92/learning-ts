// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

// Решеие:


// type Animal = 'cat' | 'dog' | 'bird';

// interface AnimalData {
//     animal: Animal;
//     breed: string;
//     sterilized?: string;
// }

// enum AnimalStatus {
//     Available = 'available',
//     NotAvailable = 'not available'
// }

// interface AnimalAvailableData extends AnimalData {
//     location: string;
//     age?: number;
// }

// interface AnimalNotAvailableData {
//     message: string;
//     nextUpdateIn: Date;
// }

// interface AnimalAvailableResponse {
//     status: AnimalStatus.Available;
//     data: AnimalAvailableData;
// }
// interface AnimalNotAvailableResponse {
//     status: AnimalStatus.NotAvailable;
//     data: AnimalNotAvailableData;
// }
// type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

// function checkAnimalData(animal: Res): AnimalAvailableData | string {
//     if (isAvailable(animal)) {
//         // Заменить условие!
//         return animal.data;
//     } else {
//         return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
//     }
// }

// function isAvailable(animal: Res): animal is AnimalAvailableResponse {
//     return (animal.status === AnimalStatus.Available) ? true : false
// }

// // console.log(checkAnimalData(
// //     {
// //         status: 'available',
// //         data: {
// //             animal: 'cat',
// //             breed: 'breed',
// //             sterilized: 'yes',
// //             location: 'usa',
// //             age: 10
// //         }
// //     }
// // ));
// console.log(checkAnimalData(
//     {
//         status: AnimalStatus.NotAvailable,
//         data: {
//             message: 'not animal',
//             nextUpdateIn: new Date()
//         }
//     }
// ));

// // console.log(
// //     `${JSON.stringify({
// //         status: 'not available',
// //         data: {
// //             message: 'not animal',
// //             nextUpdateIn: new Date()
// //         }
// //     })
        
// //       }
// //     `
// // );