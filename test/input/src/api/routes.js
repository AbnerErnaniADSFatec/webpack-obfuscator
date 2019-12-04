const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
   console.log("Hello " + req.query.name);
   return res.json({ message: 'Hello ' + req.query.name });
});

module.exports = routes;