/* Frontend code from src/utils/api.js */
/* Api methods to call /functions */
import { createUser } from './functions/createUser'
export const create = (data: any) => {
    return createUser({ body: JSON.stringify(data), method: 'POST' })
    // console.log(JSON.stringify(data), "HIII")
    // const response = fetch('./functions/createUser', {
    //     body: JSON.stringify(data),
    //     method: 'POST'
    // }).then(response => {
    //     return response.json()
    // })
}

// export function create(data: any) {
//     console.log(JSON.stringify(data), "HIII")
//     const response = fetch('./functions/createUser', {
//         body: JSON.stringify(data),
//         method: 'POST'
//     }).then(response => {
//         return response.json()
//     })
// }
export const readAll = () => {
    return fetch('./functions/readAllUsers').then((response) => {
        return response.json()
    })
}

// export default {
//     create: create,
//     readAll: readAll,
// }