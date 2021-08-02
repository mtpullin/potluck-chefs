
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

    <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
    <ul id='dropdown1' class='dropdown-content'>
      <li><a href="/#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider" tabindex="-1"></li>
      <li><a href="#!">three</a></li>
      <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
      <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
    </ul>
`;
}