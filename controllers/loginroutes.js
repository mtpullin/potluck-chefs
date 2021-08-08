const router = require('express').Router();
router.get('/', (req,res)=> {
    if(req.session.loggedIn)
    res.render('login', {loggedIn:true})
    else 
    res.render('login')
})
module.exports = router