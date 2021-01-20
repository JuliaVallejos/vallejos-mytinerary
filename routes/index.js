const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')

router.route('/cities')
.get(citiesController.allCities)
.post(citiesController.addCity)

router.route('/itineraries/:id')
.get(citiesController.itinerariesCity)



module.exports = router