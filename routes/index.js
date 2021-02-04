const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')
const itinerariesController = require('../controllers/itinerariesController')
const usersController = require('../controllers/usersController')
const passport = require('passport')
require ('../config/passport')

router.route('/cities')
.get(citiesController.allCities)
.post(citiesController.addCity)

router.route('/cities/:id')
.get(citiesController.itinerariesCity)

router.route('/:idCity/itineraries')
.get(itinerariesController.allItineraries)
.post(passport.authenticate('jwt',{session:false}),itinerariesController.addItinerary)

router.route('/itineraries/:idItinerary')
.delete(itinerariesController.deleteItinerary)

router.route('/user/register')
.post(usersController.newUser)


module.exports = router