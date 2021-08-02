async function loginForm(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').nodeValue.trim()
    const password = document.querySelector('#password-login').nodeValue.trim()

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        })
        if(response.ok){
            document.location.replace('/')
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

    if(username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-type':'application/json'}
        })
        if(response.ok){
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.login').addEventListener('submit', loginForm)

document.querySelector('.signup').addEventListener('submit', signupForm)