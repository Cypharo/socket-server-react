const { Socket } = require('socket.io')
require('dotenv').config()
const Server = require('./models/server')
const server = new Server()


server.execute()















//Desplegar el directorio publico
// app.use(express.static( __dirname + '/public'));

// io.on('connection', (socket) => { //socket del lado del servidor    
//     socket.on('mensaje-para-el-servidor',(data)=>{
//         console.log(data)
//       //  io.emit('mensaje-para-el-servidor',data)//io para que sea global 
//         socket.emit('mensaje-para-el-servidor',data)
//     })

// });


// server.listen(8080,() =>{
// console.log(`Server corriendo en puerto:8080`)
// })