"use strict";

// Require the express module.
const express = require('express');

// Create an app.
const app = express();

// Serve the file, statically.
app.use('/', express.static(__dirname));

// Select the port.
const port = process.env.PORT || 8000;

// Listen and provide console feedback.
app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
