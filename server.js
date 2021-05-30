const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Algorithms = require('./dbConfig/models/algorithm.js')
const port = process.env.PORT || 5000;
const key = require('./dbConfig/keys/keys.js');
const apiRoutes = require('./routes/api/apiRoutes.js');      


app.use(express.json());

mongoose.connect(process.env.URI || key.uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
        .then(() => console.log('mongoDB connnected'))
        .catch((err) => console.log('error occured ' + err));

app.use('/api/apiRoutes',apiRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log('Server started on ' + port);
});