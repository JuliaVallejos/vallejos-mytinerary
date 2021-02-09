const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')
const itinerariesController = require('../controllers/itinerariesController')
const usersController = require('../controllers/usersController')
const validator = require('../controllers/validator')
const passport = require('passport')
require ('../config/passport')

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
.post(passport.authenticate('jwt',{session:false}) ,itinerariesController.addComment)

router.route('/itineraries/:idItinerary/:idComment')
.delete(itinerariesController.deleteComment)
.put(itinerariesController.editComment)

router.route('/likes/:idItinerary')
.post(itinerariesController.addLike) 
.delete(itinerariesController.removeLike) 

router.route('/user/register')
.post(validator.validAccount,usersController.newUser)

router.route('/user/login')
.post(usersController.login)

router.route('/user/verification')
.post(passport.authenticate('jwt',{session:false}),usersController.login_LS)

router.route('/user/all')
.get(usersController.all_users)

router.route('/user/:id')
.delete(usersController.delete_user)


module.exports = router