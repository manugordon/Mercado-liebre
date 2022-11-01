const express = require('express')
const res = require('express/lib/response')
const app = express()
const path = require('path')

const publicPath = path.resolve(__dirname,'./public')
console.log(publicPath)

let PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log('Servidor escuchando en el puerto 3000')
})

app.use(express.static(publicPath))
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
app.get('/register',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})
app.get('/login',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
