const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // Check if the user eneters password in request body
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not to update password. Please use /updateMyPassword',
        400,
      ),
    );
  }
  // Filter out unwanted fields
  const filteredBody = filterObj(req.body, 'name', 'email');
  //Update User document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Not Implemented',
  });
};
