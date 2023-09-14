import { getGhPageInfo } from "./parse"
import serveStatic from 'serve-static-bun'

// const login = 'Elvira9797'
// const parsedLogin = await getGhPageInfo(login)
// console.log(parsedLogin)


// const server = Bun.serve({
//   port: 3333,
//   fetch(request) {
//     return new Response("Welcome to Bun!");
//   },
// });

// console.log(`Up and rdy on port:${server.port}`);

Bun.serve({fetch: serveStatic('public')})



