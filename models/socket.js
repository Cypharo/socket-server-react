class Sockets{
    constructor(io){
        this.io = io
        this.socketEvent()
    }
    socketEvent(){  
        this.io.on('connection', (socket) => { //socket del lado del servidor    
            socket.on('mensaje-para-el-servidor', (data) => {
                console.log(data)
                 this.io.emit('mensaje-para-el-servidor',data)//io para que sea global 
               // socket.emit('mensaje-para-el-servidor', data)
            })

        });

    }


}

module.exports = Sockets