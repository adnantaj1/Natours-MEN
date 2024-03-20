const Tour = require('../models/tourModel');

exports.checkBodyMiddleware = (req, res, next) => {
  if (!req.body.name || !req.body.duration) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required fields',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  // console.log(req.reqTime);
  // res.status(200).json({
  //   status: 'success',
  //   reqTime: req.reqTime,
  //   results: tours.length,
  //   data: {
  //     tours,
  //   },
  // });
};

exports.getTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find(tour => tour.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = (req, res) => {
  // if (err) throw err;
  // res.status(201).json({
  //   status: 'success',
  //   data: {
  //     tour: newTour,
  //   },
  // });
};

exports.updateTour = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour: '<Updated tour here>',
  //   },
  // });
};

exports.deleteTour = (req, res) => {
  // res.status(204).json({
  //   status: 'success',
  //   data: null,
  // });
};
