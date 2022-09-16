async function getGiphy() {
    let searchTerm = $('#search').val()
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    let gifs = res.data.data
    let ranID = Math.ceil(Math.random() * gifs.length)

    $('#catalog').append($('<img>').attr('src', gifs[ranID].images.original.url))
}

$('form').on('submit', function(e) {
    e.preventDefault()
    getGiphy()
})

$('#remove').on('click', () => {
    $('#catalog').empty()
})