const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env || 80;

app.use(express.static(path.resolve(__dirname, '../react-ui/movie-search')));

app.get('*', function(req, res){
    response.sendFile(path.resolve(__dirname, '../react-ui/movie-search', 'index.html'));
});


app.listen(PORT, function(){
    console.log(`app listening on${PORT}`)
});