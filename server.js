const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/process-image', (req, res) => {
    res.json({name:'julio'});
})

app.get('/check-image-status', (req, res) => {

});

app.get('/image/:id', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});