const router = require('express').Router();

const apiRoutes = require('./api/');
const indexRoutes = require('./index-routes')
router.use('/api', apiRoutes);
router.use('/', indexRoutes);

module.exports = router;
