const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');     
let vagas = require('./config/vagas.js');
const Vaga = require('./model/vaga.js');

                                                                
                                                                //módulo do próprio node, não precisa importar
app.use(bodyParser.urlencoded({ extended : false }));           //parseia toda a string enviada pelo http e parseia pra json
app.use(bodyParser.json());                                     //dizendo ao express usar o parse json

app.get('/', async (req, res) => {
    try {
        return res.send('Hello world from postman!!');
    } catch (error){

    }
});

app.get('/vagas', async (req, res) => {
    return res.send(vagas);
});

app.post('/vagas', async (req, res) => {
    try {
        let vagasLength = vagas.length;
        let vaga = createVaga(req.body);
        vagas.push(vaga);
        if (vagas.length > vagasLength) return res.send('Added');
        return res.status(500).send('Internal error');
    } catch (error) {
        return res.status(500).send('Internal error');
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const createVaga = (obj) => new Vaga (
    obj.id, obj.name, obj.salary , obj.description,
    obj.skills, obj.area, obj.differentials, obj.isPcd, obj.isActive
);