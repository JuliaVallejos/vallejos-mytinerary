const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')
const itinerariesController = require('../controllers/itinerariesController')

router.route('/cities')
.get(citiesController.allCities)
.post(citiesController.addCity)

router.route('/cities/:id')
.get(citiesController.itinerariesCity)

router.route('/:idCity/itineraries')
.get(itinerariesController.allItineraries)
.post(itinerariesController.addItinerary)

router.route('/itineraries/:idItinerary')
.delete(itinerariesController.deleteItinerary)


module.exports = router