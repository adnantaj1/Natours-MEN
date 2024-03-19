const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.param('id', tourController.checkValidIdMiddleware);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBodyMiddleware, tourController.createTour);

router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);



module.exports = router;