const http = require('http');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const jwt = require('express-jwt');

const secret = {secret: process.env.SECRET || 'secret'};

const server = http.createServer(app);
const users = [
    {Nombre:'Juan', Lastname: 'Ampuero'},
    {Nombre:'Jose', Lastname: 'Vera'},
    {Nombre:'Alonso', Lastname: 'Perez'}
];

app.get('', (req, res) => {
    res.send('Bienvenido a la Web');
});

app.get('/api/users', jwt(secret), (req, res) => {
    if(req.user.admin){
        res.send(users);
    }
    res.status(401).send({message:'Not authorized'});
});

server.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));