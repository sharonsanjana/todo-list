const express = require("express")
const router = express.Router()

router.get('/', (request,response) => {
response.send("to do list is done")
} ) 

module.exports=router