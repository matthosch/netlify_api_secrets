const axios = require("axios")

exports.handler = function(event, context, callback) {
    const { API_KEY } = process.env

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        })
    }

    const getMovies = async () => {
        const response = await axios.get(url)
        const data = response.data.results

        send(data)
    }

    getMovies()
}