const router = require('express').Router();
router.get('/', (req,res)=> {
    res.render('mykitchen')
})
module.exports = router