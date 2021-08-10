var count = 0;
var stepCount = 0
var flag = 0;
var submitContainer = document.getElementById('submit-container')
var recipe = []
var steps = []
var checkboxes = []
var images = []
var link = []
var span = []
var videoLink = '';
var videoImage = '';

M.AutoInit();
var options = {}
var elems = document.querySelectorAll('.recipe')
var elems2 = document.getElementById('create-recipe')
var displayRecipe = M.Collapsible.init(elems, options)
var createRecipe = M.Collapsible.init(elems2, options)
var elems3 = document.querySelectorAll('.carousel')
var options2 = {
    fullWidth: true,
    indicators: true
}
var instanceC = M.Carousel.init({
    fullWidth: true,
    indicators: true
})

async function addLink() {
    var url = []
    var title = document.getElementById('recipe_name')
    if (title.value == '')
        return alert("Enter a Recipe Name")

    var options = {}
    document.getElementById('video-container').setAttribute('class', 'collapsible')
    var elems = document.querySelectorAll('#video-container');
    var instances3 = M.Collapsible.init(elems, options);
    event.preventDefault()
    instances3[0].open()
    document.getElementById(`recipe_name`).setAttribute('disabled', "")
    var video_link = title.value
    await fetch('/api/yt/find_video', {
        method: 'POST',
        body: JSON.stringify({
            video_link
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(data => {
            data.forEach(element => {
                url.push(element)
            })
            var count = 1;
            document.getElementById("addLinkDiv").setAttribute('hidden', '')
            return url.forEach((element) => {
                var newCheckContainer = document.createElement("div")
                var newCheckLabel = document.createElement('label')
                var newCheckInput = document.createElement('input')
                var newCheckSpan = document.createElement('span')
                var newimg1 = document.createElement('img')
                 var newA = document.createElement('a')
                 
                newCheckContainer.setAttribute('class', 'col s4 m3')
                newCheckContainer.setAttribute('id', `ytContainer${count}`)
                newCheckInput.setAttribute('id', `ytInput${count}`)
                newCheckSpan.setAttribute('id', `span${count}`)
                newCheckSpan.setAttribute('onclick', 'disable(this)')
                newCheckContainer.appendChild(newCheckLabel)
                newCheckContainer.appendChild(newCheckInput)
                newCheckInput.setAttribute('type', 'checkbox')
               
                newA.setAttribute('id', `link${count}`)
                newA.setAttribute('href', `https://www.youtube.com/watch?v=${element.videoId}`)
                newA.setAttribute('target', '_blank')
                newA.setAttribute('class', 'yt-video')
                count++
                document.getElementById('yt-video-link').appendChild(newCheckContainer)
                newCheckContainer.appendChild(newA)
                newCheckContainer.appendChild(newCheckLabel)
                newCheckLabel.appendChild(newCheckInput)
                newCheckLabel.appendChild(newCheckSpan)
                newimg1.setAttribute('src', `${element.thumbnails}`)
                newimg1.setAttribute('style', `max-width:fit-content;`)
                newA.appendChild(newimg1)
                checkboxes.push(newCheckInput)
                link.push(newA)
                images.push(newimg1)
                span.push(newCheckSpan)
            })
        }
        )
}
async function disable(btn) {
    var index = parseInt(btn.id.split('span')[1]) - 1
    for (var i = 0; i < checkboxes.length; i++) {
        if (i == index) {
            if (flag == 0) {
                videoImage = images[i].getAttribute('src')
                videoLink = link[i].getAttribute('href')
                videoLink = videoLink.split('=')[1]
            } else {
                videoLink = ''
                videoImage = ''
            }
            continue;
        }
        if (flag == 0) {
            checkboxes[i].setAttribute('disabled', "")
            span[i].removeAttribute('onclick')
        } else if (flag == 1) {
            checkboxes[i].removeAttribute('disabled')
            span[i].setAttribute('onclick', 'disable(this)')
        }
    }
    if (flag == 0)
        flag = 1
    else flag = 0;
}
function createStep() {
    var options = {}
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
        steps.push({ step: step })
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
    var options = {}
    document.getElementById('ingredient-container').setAttribute('class', 'collapsible')
    var elems = document.querySelectorAll('#ingredient-container');
    var instances1 = M.Collapsible.init(elems, options);
    event.preventDefault()
    instances1[0].open()
    count++;
    if (count == 1) {
        submitContainer.innerHTML += `
        <div class ='row'>
    <h5 class='col offset-s4 s6 '></h2>
    <img id= submit-btn type ='btn' class="submitRecipe col offset-10 s2" src="/images/icons/recipes.svg" onclick='submit()'></img>
    </div>
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
    <div class="input-field row">
        <img class="addRecipe-icon col offset-s1 s3" src="/images/icons/harvest.svg"></img><br>
        <div class='col s8'>
        <input placeholder='' id="recipe_ingredient${count}" type="text" class="validate"><br>
        <label for="recipe_ingredient">Ingredients</label>
        </div>
    </div>
    <div class="input-field row">
        <img class="addRecipe-amount col offset-s1 s3" src="/images/icons/weighing-machine.svg"></img><br>
        <div class='col s8'>
        <input placeholder="" id="recipe_amount${count}" type="text" class="validate"><br>
        <label for="recipe_amount">Amount</label>
        </div>
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
    steps.push({ step: step })
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
    const response = await fetch('api/recipes/create_recipe', {
        method: 'POST',
        body: JSON.stringify({
            name,
            ingredient,
            amount,
            stepsArr,
            videoLink,
            videoImage
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.replace('/kitchen')
    } else {
        alert('An error has occured')
    }
}
async function getId(btn){
    var id= btn.id.split('btn')[1]
    return deleteRecipe(id)
}
async function deleteRecipe(id) {
    const response = await fetch(`/api/recipes/delete/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/kitchen')
    } else {
        alert(response.statusText);
    }
}
async function toggle(btn){
    var id = btn.id.split('overlay')[1]
        btn.setAttribute('hidden','')
        document.getElementById(`qr-code${id}`).removeAttribute('hidden')
        document.getElementById(`qr-message-initial${id}`).setAttribute('hidden','')
        document.getElementById(`qr-message-final${id}`).removeAttribute('hidden')
}