import faunadb from 'faunadb'

console.log("fuck")

const q = faunadb.query
const client = new faunadb.Client({
    secret: 'fnAD772M7QACBHGd-czYfgrJC25j5Y7HWdwvl1eY'
})
console.log(process.env.FAUNADB_SECRET)
console.log("MADE IT TO createUser.js")
// exports.handler = async (event, context, callback) => {
export async function createUser(event, context, callback) {
    /* parse the string body into a useable JS object */
    const data = JSON.parse(event.body)
    console.log("Function `todo-create` invoked", data)
    const todoItem = {
        data: data
    }
    return client.query(q.Create(q.Ref("classes/appchat/user"), todoItem))
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
