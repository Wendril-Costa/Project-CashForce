require('dotenv').config();
const app = require('./api');

const PORT = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send('API');
});

app.listen(PORT, () => console.log(`Server is runing at http://localhost:${PORT}`));