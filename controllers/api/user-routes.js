const router = require('express').Router()
const {User, Recipie, Comment} = require('../../models')
const Auth = require('../../utils/auth')

router.post('/signup', (req,res)=> {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(()=> {
            req.session.user_id = dbUserData.id,
            req.session.email = req.body.email,
            req.session.loggedIn = true;
            req.session.expiration = Date.now() + (1000*60*60)
            res.json(dbUserData)
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})
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
            req.session.expiration = Date.now() + (1000*60*60)
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

router.get('/', (req,res)=> {
    const test = User.findAll()
    res.json(test)
})


module.exports = router;