const express = require('express');
const app = express();

const AppRoutes = require('./routes');

app.use(express.json());
app.use(AppRoutes);

app.use((req, res, next) => {
    const error = new Error("Página não encontrada.");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
});

app.listen(3333, () => console.log('server is running'));