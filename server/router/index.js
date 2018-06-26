const router = require('express').Router();

const { user_controllers } = require('../controller/index.js');
const { photo_controllers } = require('../controller/index.js');
const { restaurant_controllers } = require('../controller/index.js');
const { review_controllers } = require('../controller/index.js');


router.route('/users')
    .get(user_controllers.get)
    .post(user_controllers.post)
    .put(user_controllers.put)
    .delete(user_controllers.delete);

router.route('/photos')
    .get(photo_controllers.get)
    .post(photo_controllers.post)
    .put(photo_controllers.put)
    .delete(photo_controllers.delete);

router.route('/restaurants')
    .get(restaurant_controllers.get)
    .post(restaurant_controllers.post)
    .put(restaurant_controllers.put)
    .delete(restaurant_controllers.delete);

router.route('/reviews')
    .get(review_controllers.get)
    .post(review_controllers.post)
    .put(review_controllers.put)
    .delete(review_controllers.delete);

module.exports = {
    router: router
};