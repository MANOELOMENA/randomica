function getChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').textContent = data.value;
        })
        .catch(error => console.error('Erro:', error));
}