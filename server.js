const express = require("express")
const app = express()

const port = process.env.PORT || 1000
app.use(express.urlencoded({extended:true}))
app.use(require("./routes/routes_profesor"))

app.listen(port,()=>{
    console.log("usuario conectado")
})