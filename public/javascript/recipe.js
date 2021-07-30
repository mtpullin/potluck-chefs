var count = 1
var i = [{id:count}]
async function addElement(btn){
    return dynamicIngredients(i.push({id:++count}))
}

async function dynamicIngredients(addElement){
    console.log(i)
    const sendObject = await fetch('/index', {
        method: 'POST',
        body: JSON.stringify({
            i
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(sendObject.ok){
        console.log('good')

    } else {
        console.log('bad')
    }
}
var count=1;
function create(){
    count++;
    document.getElementById('component').innerHTML+=`
    <div class="input-field">
        <img class="addRecipe-icon prefix" src="/images/icons/harvest.svg"></img><br>
        <input placeholder="Ingredients" id="recipe_ingredient${count}" type="text" class="validate"><br>
        <label for="recipe_ingredient">Ingredients</label><br>
    </div>
    <div class="input-field">
        <img class="addRecipe-amount prefix" src="/images/icons/weighing-machine.svg"></img><br>
        <input placeholder="Amount" id="recipe_amount${count}" type="text" class="validate"><br>
        <label for="recipe_amount">Amount</label><br>
    </div>
`;
}