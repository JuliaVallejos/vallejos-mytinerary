const mongoose = require('mongoose')

/* conexion a la Base de Datos */
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(() =>console.log('Database connected'))
.catch(error => console.log("Database not connected"))
/* 801455530732-u3v9b8l6s48ctj7nui20nn724mahsoff.apps.googleusercontent.com */