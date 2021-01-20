const mongoose = require('mongoose')

/* conexion a la Base de Datos */
mongoose.connect('mongodb+srv://dbJulia:dbpassword@mytineraries.uiw6r.mongodb.net/MYtineraries?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(() =>console.log('Database connected'))
.catch(error => console.log(error))
