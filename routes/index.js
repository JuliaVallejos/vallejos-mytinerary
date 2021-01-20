const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')

router.route('/cities')
.get(citiesController.allCities)

router.route('/itineraries/:id')
.get(citiesController.itinerariesCity)



module.exports = router