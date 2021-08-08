const router = require('express').Router();
const { User, Recipe } = require('../models')

router.get('/index', (req, res) => {
    recipe = []
    Recipe.findAll().then(data => {
        data.forEach(element => {
            recipe.push({ id: element.id, name: element.name, ingredients: [{ itemIngredient: element.ingredients.split(',') }], amount: [{ itemAmount: element.amounts.split(',') }], steps: [{ itemStep: element.steps.split(',') }], videoLink: element.videoLink, videoImage: element.videoImage })
        })
        if (req.session.loggedIn)
        User.findAll({
            where: {
                id: req.session.user_id
            }
        }).then(data => {
            userInfo = []
            userInfo.push({ username: data[0].username, email: data[0].email })
            return res.render('index', {userInfo, recipe: recipe, loggedIn: true })
        })
        else
                return res.render('index', {recipe: recipe })
    })
})


router.get('/', (req, res) => {
    res.redirect('/index');
})

module.exports = router