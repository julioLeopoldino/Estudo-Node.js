function eventLoop(){
    var a = 1;
    var b = 2;
    var c = 3;

    console.log(a);

    setTimeout(() =>{
        console.log(b);
    },1000);

    console.log(c);
}

eventLoop();

/* o node roda em requerimento de eventos 
ou seja entrega om quue ta pronto depois volta para ver se tem mais algum outro pronto e entrega novamente
fazendo isso em loop até terminar todos os eventos*/