class chuckNoris {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(jks => jks.json())
                .then(joke => resolve(joke))
                .catch(err => reject(err));
        });
    }
}