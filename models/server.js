const express = require('express');//Servidor de express
const http = require('http');//Servidor de sockets
const socketio = require('socket.io')//Configuracion del socket server
const path = require('path');
const Sockets = require('./socket');
const cors = require('cors')
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //Http Server
        this.server = http.createServer(this.app);

        //Configuracion Sockets
        this.io = socketio(this.server,{/*configuraciones(latencia,timeout,etc)*/})
    }
    middlewares(){
        this.app.use(express.static(path.resolve(__dirname,'../public')))
        this.app.use(cors())
    }

    configurarSockets(){
        new Sockets(this.io)

    }

    execute(){
        //Inicializar Middlewares
        this.middlewares()

        //Inicializar sockets
        this.configurarSockets()

        //Inicializar Server
        this.server.listen(this.port,()=>{
            console.log(`Server corriendo en puerto:${this.port}`)
        })
    }

}

module.exports = Server;