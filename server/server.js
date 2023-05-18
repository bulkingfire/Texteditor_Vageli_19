const express = require('express');


const server1 = express();

const PORT = process.env.PORT || 8081;

server1.use(express.static('../client/dist'));
server1.use(express.urlencoded({ extended: true }));

server1.use(express.json());


require('./routes/htmlRoutes')(server1);


server1.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));