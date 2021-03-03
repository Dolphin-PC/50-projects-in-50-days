const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')



async function getJoke(){
    const res = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            "Accept" : "application/json"
        }
    })
    const data = await res.json()

    jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener('click',getJoke)

getJoke()