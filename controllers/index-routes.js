const router = require('express').Router();3
// var i = [
//     {
//         id:1
//     }
// ]
router.post('/index', (req,res)=>{
    console.log(req.body)
    res.render('index', {id:req.body})
})
router.get('/index', (req,res) => {
    console.log(req.body)
    var i=[{
        id:1
    },
    // {
    //     id:2
    // },
    // {
    //     id:3
    // }
];
    res.render('index', {id:i})
})
router.get('/testView',(req,res) => {
    res.render('testView', {testView:"Test Index"})
})
router.get('/',(req,res) => {
    res.redirect('/index');
})

module.exports=router