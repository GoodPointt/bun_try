import { getGhPageTitle } from "./parse"

const login = 'Elvir9797'
const parsedLogin = await getGhPageTitle(login)
console.log(parsedLogin)



