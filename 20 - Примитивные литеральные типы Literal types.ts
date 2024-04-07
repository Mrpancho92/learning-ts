// Можно задавать самим типы данных которыми будут переменные, в данном случае это строка и переменная будет такой же строкой и не как иначе.
// let msg: "hello" = "hello";

// msg = "hello";

// const port3000: number = 3000;
// const port3001: number = 3001;

// function startServer (
//     protocol: "Http" | "Https",
//     port: 3000 | 3001
// ): "Server started" {
//     if (port === port3000 || port === port3001) {
//         console.log(`Server started on ${protocol}://server:${port}`);
//     } else {
//         console.error("Invalid port");
//     }
//     return "Server started";
// }

// startServer("Https", 3001);

// function createAnimation(
//     id: string | number,
//     animate: string,
//     timingFunc: "ease" | "ease-out" | "ease-in" = "ease",
//     duration: number,
//     iterCount: "infinite" | number
// ): void {
//     // const elem = document.querySelector(`#${id}`) as HTMLElement;
//     // if (elem) {
//         console.log(`${animate} ${timingFunc} ${duration} ${iterCount}`);
//         // elem.style.animation = `${animate} ${timingFunc} ${duration} ${iterCount}`;
//     // }
// }
// createAnimation('id', 'fade', 'ease', 5, 'infinite');