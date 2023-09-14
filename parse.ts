import {parse} from 'node-html-parser'


export const getGhPageTitle = async (ghLogin: string) => {
  const webPage = await fetch(`https://github.com/${ghLogin}`).then(res => res.text())
  const html = parse(webPage)
  const fullname = html.querySelector('.vcard-fullname')?.text.trim()
  const username = html.querySelector('.vcard-username')?.text.trim()
  const repCounter = html.querySelector('.Counter')?.text.trim()
  if(!fullname || !username ) return {message: '❌ Incorrect user login'}

  return {
    fullname,
    username,
    repCounter
  }
}
