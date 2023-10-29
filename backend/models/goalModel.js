const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    cardNumber: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    holderName: {
      type: String,
      required: [true, 'Please add a Full Name'],
    },
    month: {
      type: String,
      required: [true, 'Please add Month'],
    },
    cvv: {
      type: String,
      required: [true, 'Please add CVV'],
    }
  }
);

module.exports = mongoose.model('Goal', goalSchema);
