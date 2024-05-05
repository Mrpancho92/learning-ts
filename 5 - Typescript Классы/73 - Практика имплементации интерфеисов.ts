enum TransferStatus {
    Pending = "pending",
    Rejected = "rejected",
    Completed = "completed",
}

enum ErrorMessages {
    NotFound = "Not found: 404",
    NotEnoughSpace = "Not enough space: 507",
    Forbidden = "Forbidden: 403",
}

interface ITransfer {
    path: string;
    data: string[];
    date?: Date;
    start: (p: string, d: string[]) => string;
    stop: (reason: string) => string;
}

interface TransferError {
    message: ErrorMessages;
}

// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer implements ITransfer, TransferError {
    path: string;
    data: string[];
    date?: Date | undefined;
    start: (p: string, d: string[]) => string;
    // stop: (reason: string) => string;
    message: ErrorMessages;
    transferStatus: TransferStatus;
    // Место для реализаций
    constructor(status: TransferStatus) {
        this.transferStatus = status;
    }
    // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
    // Можно вывести в консоль данные, можно вернуть строку
    // checkTransferStatus() {
    //     console.log(this);
    //     return this.transferStatus;
    // }
    checkTransferStatus = (): string => {
        console.log(this);
        return this.transferStatus;
    }
    // Необходимо создать метод, который будет останавливать передачу данных
    // И возвращать строку с причиной и датой остановки (Дата в любом формате)
    // stop(reason: string) {
    //     return `${reason} , Date: ${new Date().toDateString()}`
    // }
    stop = (reason: string) => {
        return `Transfer stopped, reason: ${reason}, Date: ${new Date().toLocaleString()}`
    };
    // Необходимо создать метод, который будет возвращать строку, содержащую
    // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
    // Метод может показаться странным, но может использоваться для тестов, например
    // statusWithMessage():string {
    //     return `${TransferStatus.Rejected} , ${ErrorMessages.NotEnoughSpace}`
    // }
    makeError = (): string => {
        // Ведь при ошибке статус всегда "отклонено", правда?
        return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`
    }
}
const transfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(transfer.checkTransferStatus());
console.log(transfer.stop('Test'));
console.log(transfer.makeError());
