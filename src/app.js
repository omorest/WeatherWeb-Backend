const express = require('express')
const cors = require('cors')
const { getDataWeatherByCity, getDataWeatherByLatLon } = require('./api/requests')
const app = express()

app.use(cors())

const corsOptions = {
  origin: 'http://localhost:8080/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.listen(5000, () => {
  console.log('Server running on localhost:5000...')
})

app.get('/:city/:country?', async (request, response) => {
  const {city, country} = request.params;
  const data = await getDataWeatherByCity(city, country)
  response.json(data);
})

app.get('/:latitude(\\d+)/:longitude(\\d+)', async (request, response) => {
  console.log(request.params)
  const {latitude, longitude} = request.params;
  console.log({latitude, longitude})
  const data = await getDataWeatherByLatLon(latitude, longitude);
  response.json(data);
})