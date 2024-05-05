class Box5 {
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

    get сontent() {
        return this._content;
    }
    set сontent(value) {
        this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
    }

    async content(value: string) {
        const date = await new Date().toTimeString();
        this._content = `Date: ${date}, Content: ${value}`;
        console.log(this._content);
        // return this._content;
    }
}

class PresentBox extends Box5 {
    wrap: string;
    height: number = 600; // Можно переопределить свойство

    constructor(wrap: string, width: number) {
        super(width); // Вызов родительского конструктора. При наследовании соблюдаются типы.
        this.wrap = wrap;
    }
    // Модификатор override. Его суть в двух моментах:
    // 1) Данный метод является перезаписаным от родителя.
    // 2) Если данный метод исчезнет у родителя то мы сразу заметим.
    override async content(value: string, text?: string) {   // Можно использовать оператор опциональности "?" чтоб не было ошибки.
        const date = await new Date().toTimeString();

        // Если вдруг text не был задан то можно вызвать метод родителя где text не требовался.
        if (!text) {
            super.content(value); // Вызываем метод content() у родителя с одним аргументом.
        } else {
            this._content = `Date: ${date}, Content: ${value}, Text: ${text ? text : 'no text'}`;
        }

        this._content = `Date: ${date}, Content: ${value}, Text: ${text ? text : 'no text'}`;
        console.log(this._content);
        // return this._content;
    }
}
new PresentBox('red', 500).content("Tv", "Gift");