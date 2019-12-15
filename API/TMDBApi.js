const API_TOKEN = 'fe2f4670ec5ed6aa2a73088d33772b1c'

export function getFilmsFromApiWithSearchedText(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie/?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    
    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}