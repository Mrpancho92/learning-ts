// type Config = { protocol: "http" | "https", port: 3000 | 3001 };
// type Role = {
//     role: string;
// };
// // Тип пересечения intersection создается одним знаком апперсанда.
// type ConfigWithRole = Config & Role;

// const serverConfig: Config = {
//     protocol: 'https',
//     port: 3001,
// };

// const backupConfig: ConfigWithRole  = {
//     protocol: 'http',
//     port: 3000,
//     role: 'sysadmin'
// };

// // В отдельный тип можно вносить и функциональную аннотацию
// type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

// const startServer: StartFunction = (
//     protocol: "http" | "https",
//     port: 3000 | 3001,
// ): "Server started" => {

//     console.log(`Server started on ${protocol}://server:${port}`);

//     return "Server started";
// }

// startServer(serverConfig.protocol, serverConfig.port);