const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, 
    () => console.log(`listening on ${process.env.PORT || 3000}...`));