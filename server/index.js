const express = require('express');
const app = express();

const messages_controller = require('./controllers/messages_controller.js');

// PORT
const PORT = 3001;

// MIDDLEWARE (types of functions that run before controller/handler functions)
app.use(express.json()); // creates req.body and makes it available for endpoints below this point

app.use(express.static('../public/build'));


// ENDPOINTS

app.get('/api/messages', messages_controller.read);
app.post('/api/messages', messages_controller.create);
app.put('/api/messages/:id', messages_controller.update);
app.delete('/api/messages/:id', messages_controller.delete);


// ACTIVATE PORT
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));