//  Аннотация функции (protocol: "http" | "https", port: 3000 | 3001) => string , а дальше после знака "=" идет её объявление.

// const serverConfig: { protocol: "http" | "https", port: 3000 | 3001 } = {
//     protocol: 'https',
//     port: 3001,
// };

// const startServer:(protocol: "http" | "https", port: 3000 | 3001) => string = (
//     protocol: "http" | "https",
//     port: 3000 | 3001,
// ): "Server started" => {

//     console.log(`Server started on ${protocol}://server:${port}`);

//     return "Server started";
// }

// startServer(serverConfig.protocol, serverConfig.port);