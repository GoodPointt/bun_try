import { describe, expect, it } from "bun:test";
import { getGhPageInfo } from "./parse";



describe('getGhPageTitle function', ()=> {
  it('should return correct userInfo by login', async () => {
    const login='Elvira9797'
    const userInfo = await getGhPageInfo(login)
    expect(userInfo.fullname).toEqual("Elvira Lemak")
    expect(userInfo.username).toEqual("Elvira9797")
    expect(userInfo.repCounter).toEqual("44")
  })
it('should return incorrect user login message if login wrong', async () => {
    const login='Elvira9797'
    const userInfo = await getGhPageInfo(login)
    expect(userInfo.fullname).toEqual("Elvira Lemak")
    expect(userInfo.username).toEqual("Elvira9797")
    expect(userInfo.repCounter).toEqual("44")
})
})
                      
