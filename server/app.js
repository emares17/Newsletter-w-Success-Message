const express = require('express');
const app = express();
const path = require('path');
PORT = 3000

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Views
app.set('views', path.join(__dirname, 'views'));

// Set View Engine
app.set('view engine', 'ejs');

// Middleware to parse JSON and URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

submittedEmail = [];

app.post('/subscribe', (req, res) => {
    email = req.body.email;

    submittedEmail.push(email);

    res.render('success', { email });
});

// Server
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
});