import { getGhPageTitle } from "./parse"

const login = 'GoodPointt'
const parsedLogin = await getGhPageTitle(login)
console.log(parsedLogin)



