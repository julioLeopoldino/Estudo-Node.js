const http = require('http'); //importando o modulo http
const host = 'http://localhost';
const porta = 80;

http.createServer((req, res) => {
    res.end('<h1>Meu servidor ta On</h1>'); //fez uma requisiçao para aparcer a mag do h1 e logo dsepois encerrou com '.end'
}).listen(porta, () => console.log(`Server is runisg ${host}:${porta}`)); //a funçao listen é para 'escutar' alguma porta http
