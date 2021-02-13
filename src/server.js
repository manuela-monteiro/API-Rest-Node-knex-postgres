const express = require('express');
const app = express();

const AppRoutes = require('./routes');

app.use(AppRoutes);

app.listen(3333, () => console.log('server is running'));