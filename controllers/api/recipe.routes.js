const router = require('express').Router()
const {User, Recipe, Comment} = require('../../models')
const Auth = require('../../utils/auth')

router.get('/test', (req,res)=>{
    const object = [{test:'object'}]
    res.json(object)
})
router.post('/create_recipe', async (req,res)=> {
    const createRecipe = await Recipe.create({
        name: req.body.name,
        ingredients: req.body.ingredient,
        amounts: req.body.amount,
        steps: req.body.stepsArr,
        videoLink: req.body.videoLink
    })
    res.json(createRecipe)
})
router.get('/', async (req,res) => {
    const allRecipes = await Recipe.findAll()
    res.json(allRecipes)
})
module.exports = router