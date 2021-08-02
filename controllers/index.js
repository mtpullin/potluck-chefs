const router = require('express').Router();
const loginroutes = require('./loginroutes')
const apiRoutes = require('./api/');
const indexRoutes = require('./index-routes')
const myKitchenRoutes = require('./mykitchen-routes')

router.use('/mykitchen', myKitchenRoutes)
router.use('/login', loginroutes)
router.use('/api', apiRoutes);
router.use('/', indexRoutes);

module.exports = router;
