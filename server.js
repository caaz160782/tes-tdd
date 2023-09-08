const express     = require('express');
const axios   = require('axios');
const bodyParser  = require('body-parser')
const app         = express();
const port        = 5000;
const {users,posts}    = require('./endpoints');
const { authenticate } =require('./middlewares');

//  parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// const userHandlers = users ({axios});
// app.get('/',userHandlers.get);
// app.post('/',userHandlers.post);
// app.put('/:id',userHandlers.put);
// app.delete('/:id',userHandlers.delete);

 const postHandlers = posts ({axios});
 app.post('/',authenticate,postHandlers.post);


app.listen(port, ()=>console.log(`Example app listening on port ${port}`));
