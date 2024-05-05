class Box4 {
    width: number;
    height: number = 500;   // Значение можно указывать и тут
    volume: number | undefined;
    _content: string | undefined;

    constructor(width: number, volume?: number, content?: string) {
        this.width = width;
        this.volume = volume;
        this._content = content;
    }
}
class Styles {
    [s: string]: string | ((s: string) => boolean); // Тут мы указали что у нас могут быть строки или функции в указанном формате

    method() {
        return true
    }
}
const style = new Styles();
style.color = 'red';
style.font = 'Roboto';