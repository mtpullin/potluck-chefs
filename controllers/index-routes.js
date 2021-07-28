const router = require('express').Router();

router.get('/index',(req,res) => {
    res.render('testView', {testView:"Test Index"})
})
router.get('/',(req,res) => {
    res.redirect('/index');
})

module.exports=router