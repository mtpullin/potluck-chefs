var count = 0;
var stepCount = 0
var flag = 0;
var submitContainer = document.getElementById('submit-container')
var recipe = []
var steps = []
M.AutoInit();

function createStep() {
    var options = {
        
    }
    document.getElementById('description-container').setAttribute('class', 'collapsible')
    var elems = document.querySelectorAll('#description-container');
    var instances2 = M.Collapsible.init(elems, options);
    event.preventDefault()
    instances2[0].open()
    stepCount++
    if (stepCount > 1) {
        var step = document.getElementById(`step${stepCount - 1}`).value
        
        if (step == '') {
            stepCount--
            return alert("No Empty Values")
        }
        steps.push({ step:step })
    }
    document.getElementById('description').innerHTML += `
    <label for="post-comment" class="form-label">Step ${stepCount}</label>
    <textarea type="post-comment" class="form-control" id="step${stepCount}"></textarea>
    `
    for (var i = 0; i < steps.length; i++) {
        document.getElementById(`step${i + 1}`).value = steps[i].step
        document.getElementById(`step${i + 1}`).setAttribute('disabled', "")
    }
}
function createIngredient() {
    var options = {

    }
    document.getElementById('ingredient-container').setAttribute('class', 'collapsible')
    var elems = document.querySelectorAll('#ingredient-container');
    var instances1 = M.Collapsible.init(elems, options);
    event.preventDefault()
    instances1[0].open()
    count++;
    if (count == 1) {
        submitContainer.innerHTML += `
    <img id= submit-btn type ='btn' class="submitRecipe prefix modal-trigger" src="/images/icons/recipes.svg" onclick='submit()' style='height:4rem; width:auto'></img>
    `}
    else {
        var ingredient = document.getElementById(`recipe_ingredient${count - 1}`).value
        var amount = document.getElementById(`recipe_amount${count - 1}`).value
        if (ingredient == '' || amount == '') {
            count--
            return alert("No Empty Values")
        }
        recipe.push({ ingredient: ingredient, amount: amount })
    }
    document.getElementById('component').innerHTML += `
    <div class="input-field">
        <img class="addRecipe-icon prefix" src="/images/icons/harvest.svg"></img><br>
        <input placeholder='' id="recipe_ingredient${count}" type="text" class="validate"><br>
        <label for="recipe_ingredient">Ingredients</label>
    </div>
    <div class="input-field">
        <img class="addRecipe-amount prefix" src="/images/icons/weighing-machine.svg"></img><br>
        <input placeholder="" id="recipe_amount${count}" type="text" class="validate"><br>
        <label for="recipe_amount">Amount</label>
    </div>
`
    for (var i = 0; i < recipe.length; i++) {
        document.getElementById(`recipe_ingredient${i + 1}`).value = recipe[i].ingredient
        document.getElementById(`recipe_ingredient${i + 1}`).setAttribute('disabled', "")
        document.getElementById(`recipe_amount${i + 1}`).value = recipe[i].amount
        document.getElementById(`recipe_amount${i + 1}`).setAttribute('disabled', "")
    }
}

async function submit() {
    var name = document.getElementById('recipe_name').value
    var ingredient = document.getElementById(`recipe_ingredient${count}`).value
    var amount = document.getElementById(`recipe_amount${count}`).value
    var step = document.getElementById(`step${stepCount}`).value
    if (ingredient == '' || amount == '' || name == '' || step == '') {
        return alert("No Empty Values")
    }
    recipe.push({ ingredient: ingredient, amount: amount })
    steps.push({step:step})
    document.getElementById(`recipe_ingredient${count}`).setAttribute('disabled', "")
    document.getElementById(`recipe_amount${count}`).setAttribute('disabled', "")
    document.getElementById(`step${stepCount}`).setAttribute('disabled', "")
    var ingredients = []
    var amounts = []
    var stepsArr = []
    recipe.forEach(element => {
        ingredients.push(element.ingredient)
        amounts.push(element.amount)
    })
    steps.forEach(element => {
        stepsArr.push(element.step)
    })
    var ingredient = ingredients.join(',')
    var amount = amounts.join(',')
    var stepsArr = stepsArr.join(',')
    console.log(stepsArr, amount, ingredient)
    const response = await fetch('api/recipes/create_recipe', {
        method: 'POST',
        body: JSON.stringify({
            name,
            ingredient,
            amount,
            stepsArr
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        console.log("good")
    } else {
        console.log('bad')
    }
}