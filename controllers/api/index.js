const router = require('express').Router();

const testRoutes = require('./test-routes.js');
const userRoutes = require('./user-routes')
router.use('/test', testRoutes);
router.use('/login', userRoutes)
module.exports = router;
