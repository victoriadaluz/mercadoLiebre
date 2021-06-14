const express = require('express');
const app = express();
const port = 3000;
let path= require('path');

/*Middleware*/

app.use(express.static('public'))

/* Routing */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

/*Servidor*/
app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}` ))
