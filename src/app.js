const express = require('express')
const { getDataWeatherByCity } = require('./api/requests')
const app = express()

app.listen(5000, () => {
  console.log('Server running on localhost:5000...')
})


app.get('/:city/:country?', async (request, response) => {
  const {city, country} = request.params;
  const data = await getDataWeatherByCity(city, country)
  response.send(data);
})