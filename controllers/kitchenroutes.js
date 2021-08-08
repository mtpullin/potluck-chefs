const router = require('express').Router();
const { User, Recipe } = require('../models')
const Auth = require('../utils/auth')
router.get('/', Auth, (req, res) => {
    var recipe = []
    Recipe.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: {
            model: User
        }
    }).then(data => {
        data.forEach(element => {
            recipe.push({ id: element.id, name: element.name, ingredients: [{ itemIngredient: element.ingredients.split(',') }], amount: [{ itemAmount: element.amounts.split(',') }], steps: [{ itemStep: element.steps.split(',') }], videoLink: element.videoLink, videoImage: element.videoImage, username: element.user.username, createdAt: new Date(element.createdAt).toLocaleDateString('en-US') })
        })
        User.findAll({
            where: {
                id: req.session.user_id
            }
        }).then(data => {
            userInfo = []
            userInfo.push({ username: data[0].username, email: data[0].email })
            if (req.session.loggedIn)
                return res.render('kitchen', { userInfo, recipe: recipe, loggedIn: true })
            else
                return res.render('kitchen', { userInfo, recipe: recipe })
        })
    })
})
module.exports = router