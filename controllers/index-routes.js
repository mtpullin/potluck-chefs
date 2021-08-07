const router = require('express').Router();3
const {User, Recipe} = require('../models')
router.get('/index', (req, res) => {
    Recipe.findAll().then(data => {
        recipe = []
        data.forEach(element => {
            recipe.push({ name: element.name, ingredients: [{ itemIngredient: element.ingredients.split(',') }], amount: [{ itemAmount: element.amounts.split(',') }], steps: [{ itemStep: element.steps.split(',') }], videoLink: element.videoLink, videoImage:element.videoImage })
        })
        if(req.session.loggedIn)
        res.render('index', { recipe: recipe, loggedIn: true })
        else 
        res.render('index', { recipe: recipe})
    })
})

router.get('/',(req,res) => {
    res.redirect('/index');
})

module.exports=router