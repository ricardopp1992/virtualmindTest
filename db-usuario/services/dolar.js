const axios = require('axios')

module.exports = function() {
    return(
    axios.get('http://www.bancoprovincia.com.ar/Principal/Dolar')
        .then( (response) => {
                return response.data

            }
        )
    )  
}