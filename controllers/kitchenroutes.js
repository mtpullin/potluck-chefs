const router = require('express').Router();
const e = require('express');
const { User, Recipe } = require('../models')
const Auth = require('../utils/auth')
router.get('/', Auth, (req, res) => {
    Recipe.findAll().then(data => {
        var recipe=[]
        data.forEach(element => {
            recipe.push({ name: element.name, ingredients: [{ itemIngredient: element.ingredients.split(',') }], amount: [{ itemAmount: element.amounts.split(',') }], steps: [{ itemStep: element.steps.split(',') }], videoLink: element.videoLink, videoImage:element.videoImage  })
        })
        res.render('kitchen', { recipe: recipe, loggedIn: req.session.loggedIn })
    })
})
module.exports = router