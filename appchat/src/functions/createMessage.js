import faunadb from 'faunadb'



console.log(process.env.FAUNADB_SECRET)
console.log("MADE IT TO createUser.js")
// exports.handler = async (event, context, callback) => {
export async function CreateMessage(event, context, callback) {
    const q = faunadb.query
    const client = new faunadb.Client({
        secret: 'fnAD8pvoHbACA1p-UnO4ExkZBAGxaH0ws8NLsyNv'
    })
    /* parse the string body into a useable JS object */
    const data = JSON.parse(event.body)
    console.log("Function `todo-create` invoked", data)
    const todoItem = {
        data: data
    }
    return client.query(q.Create(q.Ref("classes/kingMessage"), todoItem))
        .then((response) => {
            console.log("success", response)
            /* Success! return the response with statusCode 200 */
            // return callback(null, {
            //     statusCode: 200,
            //     body: JSON.stringify(response)
            // })
        }).catch((error) => {
            console.log("error", error)
            /* Error! return the error with statusCode 400 */
            //     return callback(null, {
            //         statusCode: 400,
            //         body: JSON.stringify(error)
            //     })
        })
}
