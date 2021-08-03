const router = require('express').Router();
const {User, Recipe} = require('../models')
router.get('/', (req,res)=> {
    Recipe.findAll().then(data=>{
        console.log(data)
        names = []
        ingredientArr = []
        stepsArr = []
        recipe= []
       data.forEach(element => {
        recipe.push({name:element.name,ingredients:[{itemIngredient:element.ingredients.split(',')}],amount:[{itemAmount:element.amounts.split(',')}],steps:[{itemStep:element.steps.split(',')}]})
        names.push({name:element.name})
        ingredientArr.push({ingredients:element.ingredients.split(','), amount:element.amounts.split(',')})
        stepsArr.push({stepObj:element.steps.split(',')})
       })
    //    console.log(ingredientArr)
        //    console.log(names,ingredientArr,stepsArr)

       res.render('kitchen', {recipe:recipe })
    })
})
module.exports = router