
var count = 1;
function create(){
    count++;
    document.getElementById('component').innerHTML+=`
    <div class="input-field">
        <img class="addRecipe-icon prefix" src="/images/icons/harvest.svg"></img><br>
        <input placeholder="" id="recipe_ingredient${count}" type="text" class="validate"><br>
        <label for="recipe_ingredient">Ingredients</label>
    </div>
    <div class="input-field">
        <img class="addRecipe-amount prefix" src="/images/icons/weighing-machine.svg"></img><br>
        <input placeholder="" id="recipe_amount${count}" type="text" class="validate"><br>
        <label for="recipe_amount">Amount</label>
    </div>
`;
console.log(count)
}

console.log(count)