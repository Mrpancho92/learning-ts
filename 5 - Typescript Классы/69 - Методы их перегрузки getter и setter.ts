class Box3 {
    width: number;
    height: number;
    volume: number | undefined;
    _content: string | undefined;   // "_" - говорит разработчикам что это свойство нельзя трогать руками

    constructor(width: number, volume?: number, content?: string) {
        this.width = width;
        this.volume = volume;
        this._content = content;
        this.height = 500;
    }

    calculateVolume(): void {
        if (!this.volume) {
            this.volume = this.width * this.height;
            console.log(`Объем посылки: ${this.volume}`);
        } else {
            console.log(`Объем посылки: ${this.volume}`);
        }
    }
    checkBoxSize(transport: number): string;
    checkBoxSize(transport: number[]): string;
    checkBoxSize(transport: number | number[]): string {
        if (typeof transport === 'number') {
            return transport >= this.width ? 'Ok' : 'Not ok'
        } else {
            return transport.some(t => t >= this.width) ? 'Ok' : 'Not ok'
        }
    }

    // get boxContent() {
    //     return this._content;
    // }
    // set boxContent(value) {
    //     this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
    // }
    // Отдельное get без set даст то что content будет readonly. 'сontent' because it is a read-only property.
    // У get и set есть одно ограничение они не могут быть ассинхронными. async set - нельзя.
    get сontent() {
        return this._content;
    }
    set сontent(value) {
        this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
    }
    // Если мы хотим обработать асинхронную операцию то создаем обычный метод.
    async content(value: string) {
        const date = await new Date().toTimeString();
        this._content = `Date: ${date}, Content: ${value}`;
    }
}

const firstBox3 = new Box3(250);
firstBox3.volume = 50000;
// console.log(firstBox3.checkBoxSize([200, 500]));
// console.log(firstBox3.boxContent = 'Test');
// console.log(firstBox3.boxContent);
console.log(firstBox3.сontent = 'Test');
console.log(firstBox3.сontent);

