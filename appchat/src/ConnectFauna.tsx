/* Frontend code from src/utils/api.js */
/* Api methods to call /functions */

export const create = (data: any) => {
    return fetch('/../functions/createUser', {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

export const readAll = () => {
    return fetch('/.netlify/functions/readAllUsers').then((response) => {
        return response.json()
    })
}

// export default {
//     create: create,
//     readAll: readAll,
// }