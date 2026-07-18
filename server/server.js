import express from 'express'
const app= express()
const PORT =process.env.PORT||8000

app.get('/',(req,res)=>{
    res.send("<h1>hello</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})