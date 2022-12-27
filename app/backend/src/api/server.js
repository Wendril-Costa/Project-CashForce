require('dotenv').config();
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const PORT = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send('API');
});

app.listen(PORT, () => console.log(`Server is runing at http://localhost:${PORT}`));