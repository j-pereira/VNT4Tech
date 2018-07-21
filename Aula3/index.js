const http = require('http');
const port = 3000;

const server = http.createServer( (req, res) => {               //Declarando servidor inicializando com http
    res.write('Hello world!');                                  //Ele está escutando qualquer requisição
    res.end();                                                  //E vai devolver esse tratamento
})
.listen(port, () => {
    console.log(`Server linstening on port ${port}`);
})
