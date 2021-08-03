const router = require('express').Router();
const { User, Recipe } = require('../models')
router.get('/', (req, res) => {
    Recipe.findAll().then(data => {
        recipe = []
        data.forEach(element => {
            recipe.push({ name: element.name, ingredients: [{ itemIngredient: element.ingredients.split(',') }], amount: [{ itemAmount: element.amounts.split(',') }], steps: [{ itemStep: element.steps.split(',') }] })
        })
        res.render('kitchen', { recipe: recipe })
    })
})
module.exports = router