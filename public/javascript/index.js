function testAPI(){
    const test = fetch('/api/yt/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    }).then(res=> res.json())
    .then(data => 
        console.log(data)
    )

    // if(test.ok){
    //     console.log('true')
    // }
    // else{
    //     console.log('false')
    // }
}


testAPI()