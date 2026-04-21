

// deploy app:
//steps:   -name : srat server
//         run : node server.js

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//Homework : in CI/CD what does ci wporkflow check?
//Must be in sequence
// Linting check
// Run test
// code build

