const router = require('express').Router();3
const {User, Recipe} = require('../models')
router.get('/index', (req, res) => {
    Recipe.findAll().then(data => {
        recipe = []
        data.forEach(element => {
            recipe.push({ name: element.name, ingredients: [{ itemIngredient: element.ingredients.split(',') }], amount: [{ itemAmount: element.amounts.split(',') }], steps: [{ itemStep: element.steps.split(',') }] })
        })
        res.render('index', { recipe: recipe })
    })
})
// router.get('/index', (req,res) => {
//     console.log(req.body)
//     var i=[{
//         id:1
//     },
//     // {
//     //     id:2
//     // },
//     // {
//     //     id:3
//     // }
// ];
//     res.render('index', {id:i})
// })
router.get('/testView',(req,res) => {
    res.render('testView', {testView:"Test Index"})
})
router.get('/',(req,res) => {
    res.redirect('/index');
})

module.exports=router