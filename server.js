const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});