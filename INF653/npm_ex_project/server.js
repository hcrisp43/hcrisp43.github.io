const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

//apply cors
app.use(cors(corsOptions));

// built in middleware for form data
app.use(express.urlencoded({ extended: false }));

// middleware for json
app.use(express.json());

// serve static files
app.use('/', express.static(path.join(__dirname, '/public')));
//app.use('/subdir/', express.static(path.join(__dirname, '/public')));

//Create rout to subdir
app.use('/', require('./routes/route'));
//app.use('/subdir/', require('./routes/subdir'));
app.use('/employees', require('./routes/api/employees'));



//Route handlers
/*app.get('/hello(.html)?', (req, res, next) => {
    console.log('attempted to load hello.html');
    next()
}, (req, res) => {
    res.send('Hello World');
});

//Chaining handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished');
}
//Call chain
app.get('/chain(.html)?', [one, two, three]);*/

app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html')); //Actually sends 200 status since 404.html is found, so send with 404 status)
    }
    else if(req.accepts('json')) {
        res.json({ error: "404 Not Found"})
    }
    else {
        res.type('txt').send("404 Not Found");
    }
});

//Custom error handler instead of Express error handler
/*app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});*/

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));