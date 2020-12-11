// not really a neccessary file, but it was at one point so i just kept rolling with it
import { createUser } from './functions/createUser'
import { readAllUsers } from './functions/readAllUsers'
import { CreateKingMessage } from './functions/createKingMessage'
import { CreateMessage } from './functions/createMessage'
import { ReadAllKingMessages } from './functions/readAllKingMessages'
import { ReadAllMessages } from './functions/readAllMessages'
export const create = (data: any) => {
    return createUser({ body: JSON.stringify(data), method: 'POST' })
}
export const createMessage = (data: any) => {
    return CreateMessage({ body: JSON.stringify(data), methdod: 'POST' })
}
export const createKingMessage = async (data: any) => {
    return await CreateKingMessage({ body: JSON.stringify(data), method: 'POST' })
}
export const readAllKingMessages = () => {
    return ReadAllKingMessages()
}
export const readAllMessages = () => {
    return ReadAllMessages()
}
export const readAll = () => {
    return readAllUsers()
}
