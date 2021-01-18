const express = require('express')

const app = express()
app.get('/api', (req,res)=>{
    res.json({
        mensaje: 'Bienvenido'
    })
})

app.listen(4000,()=>console.log('App listening on port 4000'))