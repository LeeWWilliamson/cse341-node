const routes = require('express').Router();
const baseController = require('../controllers');

routes.get('/', baseController.getElizabeth);
routes.get('/faye', baseController.getFaye);
routes.get('/roby', baseController.getRoby);

module.exports = routes;
