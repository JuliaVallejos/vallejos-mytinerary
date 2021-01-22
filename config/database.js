const mongoose = require('mongoose')

/* conexion a la Base de Datos */
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(() =>console.log('Database connected'))
.catch(error => console.log(error))
