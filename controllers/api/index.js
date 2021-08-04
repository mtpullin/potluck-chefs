const router = require('express').Router();

const userRoutes = require('./user-routes')
const ytRoutes = require('./youtube-routes')
const recipeRoutes=require('./recipe.routes')

router.use('/recipes', recipeRoutes)
router.use('/yt', ytRoutes)
router.use('/login', userRoutes)

module.exports = router;
