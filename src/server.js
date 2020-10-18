//importar dependencia
const express = require('express');

//caminho da pasta importada
const path = require('path');

// iniciando o express
const pages = require('./pages.js');

const server = express()
//criar rota
server
//utilizar body do req
.use(express.urlencoded({extended: true}))

//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine hbs
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')


//rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500)