const express = require('express');
const bioRouter = express.Router();

bioRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the bios to you');
})
.post((req, res) => {
    res.end(`Will add the bio: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bios');
})
.delete((req, res) => {
    res.end('Deleting all bios');
});

module.exports = bioRouter;