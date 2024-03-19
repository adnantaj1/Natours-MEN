const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

//1) Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  req.reqTime = new Date().toISOString();
  next();
})
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//2) Routes handlers
const getAllTours = (req, res) => {
  console.log(req.reqTime);
  res.status(200).json({
    status: 'success',
    reqTime: req.reqTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  if (id >= tours.length) {
    return res.status(404).json({
      status: 'error',
      message: 'Tour not found',
    });
  }
  const tour = tours.find(tour => tour.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours), (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      })
    })
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'error',
      message: 'Invalid tour id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

const deleteTour = (req, res) => {

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'error',
      message: 'Invalid tour id',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
}

const getUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
}

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
}

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
};


// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// 3) Routes
app
  .route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour);

app.route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route('/api/v1/users')
  .get(getAllUsers)
  .post(createUser);

app.route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

// 4) Server Start
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

