const router = require('express').Router()
const {User, Recipe, Comment} = require('../../models')
const Auth = require('../../utils/auth')

router.post('/create_recipe', Auth, async (req,res)=> {
    const createRecipe = await Recipe.create({
        name: req.body.name,
        ingredients: req.body.ingredient,
        amounts: req.body.amount,
        steps: req.body.stepsArr,
        videoLink: req.body.videoLink,
        videoImage: req.body.videoImage,
        user_id: req.session.user_id
    })
    res.json(createRecipe)
})
router.delete('/delete/:id', Auth, (req, res) => {
    Recipe.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.redirect('/kitchen')
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.get('/', async (req,res) => {
    const allRecipes = await Recipe.findAll()
    res.json(allRecipes)
})
module.exports = router