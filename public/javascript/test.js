async function helloWorld() {
    return console.log("Hello World")
}

helloWorld()
const api =  fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=pikachu&type=video&key=AIzaSyDzQD4C9xqP-BI3gizn-_eltKiS0GKu41o').then(data => {
    return console.log(data.json())
})
api

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=pikachu&type=video&key=AIzaSyDzQD4C9xqP-BI3gizn-_eltKiS0GKu41o