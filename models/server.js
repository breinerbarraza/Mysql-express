
const express = require("express");
const conexion = require("../config/conex");

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths ={
            inicio: '/auth/home',
            usuario:'/auth/user'
        }
        this.conexion();
        this.middlewares();
        this.router();
    }
    async conexion(){__dirname
    }

    middlewares(){
        this.app.use(express.json());
        // Motor de plantilla
        const hbs = require('hbs');
        hbs.registerPartials(__dirname + '/views/partials', function (err) {});
        this.app.set('view engine', 'hbs');
        const arreglo = __dirname.split("/");
        arreglo.pop();
        let data = arreglo.join("/");
        this.app.set("views",  data + "/views");
        this.app.use(express.static(__dirname + "/public"));
    }

    router(){
        this.app.use(this.paths.inicio, require("../router/home"));
        this.app.use(this.paths.usuario, require("../router/usuario"));
    }

    listen(){   
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
  
    
}

module.exports= Server

