const express = require("express")
const app = express()

const todo = require("./Routes/todo_items")
app.get('/' , (request,response) => {
    response.send("hello")

})
app.use('api/v1/todoitems' , todo)
app.listen(3500,console.log("http://localhost:3500"))
