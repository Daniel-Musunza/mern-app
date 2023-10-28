const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    identity: {
      type: String,
      required: [true, 'Please add Internet Identity'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
