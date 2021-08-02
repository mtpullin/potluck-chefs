const router = require('express').Router()
const {User, Recipie, Comment} = require('../../models')
const Auth = require('../../utils/auth')

router.post('/login', Auth, (req,res)=> {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData){
            res.status(400).json({message: 'no user with that email'})
            return;
        }

        const validPass = dbUserData.checkPass(req.body.password)

        if(!validPass) {
            res.status(400).json({message: 'incorrect password'})
            return
        }
        req.session.save(()=> {
            req.session.user_id = dbUserData.user_id
            req.session.username = dbUserData.username
            req.session.loggedIn = true

            res.json({user: dbUserData, message: 'Logged in!'})
        })
    })
})


router.post('/logout', Auth, (req,res)=> {
    if(req,session.loggedIn){
        req.session.destroy(()=> {
            res.status(204).end()
        })
    }else {
        res.status(404).end()
    }
})


module.exports = router;