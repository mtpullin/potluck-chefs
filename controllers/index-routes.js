const router = require('express').Router();

router.get('/index',(req,res) => {
    var i=[{
        id:1
    },
    {
        id:2
    },
    {
        id:3
    }];
    res.render('index', {id:i[2]})
})
router.get('/testView',(req,res) => {
    res.render('testView', {testView:"Test Index"})
})
router.get('/',(req,res) => {
    res.redirect('/index');
})

module.exports=router