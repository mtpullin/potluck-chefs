async function loginForm(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').nodeValue.trim()
    const password = document.querySelector('#password-login').nodeValue.trim()

    if(email && password) {
        const response = await fetch('/api/login/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        })
        if(response.ok){
            document.location.replace('/kitchen')
        }else{
            alert(response.statusText)
        }
    }
}


async function signupForm(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
    console.log(username,email,password)

    if(username && email && password) {
        const response = await fetch('/api/login/signup', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-type':'application/json'}
        })
        if(response.ok){
            document.location.replace('/kitchen')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#loginBtn').addEventListener('click', loginForm)

document.querySelector('#signupBtn').addEventListener('click', signupForm)
