const http = new chuckNoris;
document.querySelector('button').addEventListener('click', () => {
    let output = '';
    http.get(`https://api.icndb.com/jokes/random/${document.querySelector('#JokesNum').value}`)
        .then(rJ => {
            rJ.value.forEach(joke => output += `<li>${joke.joke}</li>`);
            document.querySelector('ul').innerHTML = output;
        })
        .then(document.querySelector('#JokesNum').value = '');
});