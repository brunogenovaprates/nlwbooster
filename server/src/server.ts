import express, { response } from 'express';

const app = express();
//2 parametros a rota users e o resposta|request
app.get('/users', (request, response) => { 
    console.log('Listagem de usuários');
//retorno para o html vindo através do rsponde.json     
    response.json([
        'Bruno',
        'Thais',
        'Sofia',
        'Sofia++',
        'Familia'
    ]);
});

app.listen(3333);







