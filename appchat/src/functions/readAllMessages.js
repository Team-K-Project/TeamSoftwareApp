/* code from functions/todos-read-all.js */
import faunadb from 'faunadb'


console.log(process.env.FAUNADB_SECRET)
export function ReadAllMessages() {
    // exports.handler = (event, context, callback) => {
    const q = faunadb.query
    const client = new faunadb.Client({
        secret: "fnAD8pvoHbACA1p-UnO4ExkZBAGxaH0ws8NLsyNv"
    })
    console.log("Function `todo-read-all` invoked")
    return client.query(q.Paginate(q.Match(q.Ref("indexes/all_messages"))))
        .then((response) => {
            const todoRefs = response.data
            // create new query out of todo refs. http://bit.ly/2LG3MLg
            const getAllTodoDataQuery = todoRefs.map((ref) => {
                return q.Get(ref)
            })
            // then query the refs
            return client.query(getAllTodoDataQuery).then((ret) => {
                return JSON.stringify(ret)
                // callback(null, {
                //     statusCode: 200,
                //     body: JSON.stringify(ret)
                // })
            })
        }).catch((error) => {
            // console.log("error", error)
            // return callback(null, {
            //     statusCode: 400,
            //     body: JSON.stringify(error)
            // })
        })
}