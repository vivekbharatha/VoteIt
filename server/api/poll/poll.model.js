'use strict';

import mongoose from 'mongoose';

var PollSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
    unique: true,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  userId: {
    type: String,
    ref: 'User'
  }
});

export default mongoose.model('Poll', PollSchema);
