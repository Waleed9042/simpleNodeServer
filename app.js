const express = require('express');
const app = express();

const portNumber = process.env.portNumber || 8080;

app.listen(portNumber, () => {
  console.log('app running at localhost', portNumber);
});
