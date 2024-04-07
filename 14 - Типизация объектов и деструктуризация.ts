const isBirthdaydata3: boolean = true;
let ageData3: number = 40;
const userNameData3: string = "John";

const userData2 = {
    isBirthdayData3: true,
    ageData3: 40,
    userNameData3: "John",
    messages: {
        error: 'Error'
    }
};
 
const createError3 = (msg: string) => {
    throw new Error(msg);
};

 function logBrtMsg3({isBirthdayData3, userNameData3, ageData3, messages: {error} }: {
    isBirthdayData3: boolean;
    userNameData3: string;
    ageData3: number;
    messages: {error: string}
 }) : string {
    if (isBirthdayData3) {
        return `Congrats ${userNameData3.toLocaleUpperCase()}, age: ${ageData3 + 1}`;
    } else {
        return createError(error);
    }
   
 }

logBrtMsg3(userData2);