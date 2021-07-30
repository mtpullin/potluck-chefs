const router = require('express').Router();
const loginroutes = require('./loginroutes')
const apiRoutes = require('./api/');
const indexRoutes = require('./index-routes')
router.use('/api', apiRoutes);
router.use('/', indexRoutes);
router.use('/login', loginroutes)
module.exports = router;
