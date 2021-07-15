const express = require('express')
const cors = require('cors')
const { getDataWeatherByCity, getDataWeatherByLatLon } = require('./api/requests')
const app = express()

const corsOptions = {
  origin: 'http://192.168.1.62:8080',
  optionsSuccessStatus: 200
}

app.use(cors())

app.listen(5000, () => {
  console.log('Server running on localhost:5000...')
})

app.get('/api/location/:city/:country?', cors(corsOptions), async (request, response) => {
  const {city, country} = request.params;
  const data = await getDataWeatherByCity(city, country)
  response.json(data);
})

app.get('/api/coords/:latitude/:longitude', cors(corsOptions), async (request, response) => {
  const {latitude, longitude} = request.params;
  const data = await getDataWeatherByLatLon(latitude, longitude);
  response.json(data);
})