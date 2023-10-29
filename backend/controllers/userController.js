const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { identity } = req.body

  if (!identity) {
    res.status(400)
    throw new Error('Please add Identity')
  }

  // Check if user exists
  const userExists = await User.findOne({ identity })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
 


  // Create user
  const user = await User.create({
    identity
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      identity: user.identity,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { identity } = req.body

  // Check for user email
  const user = await User.findOne({ identity })

  if (user) {
    res.json({
      _id: user.id,
      identity: user.identity,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
