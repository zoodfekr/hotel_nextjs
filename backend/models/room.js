import mongoose, { Schema } from 'mongoose'

const roomSchema = new Schema({
  name: {
    type: String,
    required: [true, 'please enter room name'],
    trim: true,
    maxLength: [200, 'room name cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'please enter room description']
  },
  pricePerNight: {
    type: Number,
    required: [true, 'please enter room price per night'],
    default: 0.0
  },
  address: {
    type: String,
    required: [true, 'please enter room address']
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere'
    },
    formattedAddress: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  guestCapacity: {
    type: Number,
    required: [true, 'please enter room guest capacity']
  },
  numOfBeds: {
    type: Number,
    required: [true, 'please enter number of beds in room']
  },
  isInternet: {
    type: Boolean,
    default: false
  },
  isBreakfast: {
    type: Boolean,
    default: false
  },
  isAirCondition: {
    type: Boolean,
    default: false
  },
  isPetsAllowed: {
    type: Boolean,
    default: false
  },
  isRoomCleaning: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
    required: [true, 'please enter room category'],
    enum: {
      values: ['king', 'single', 'twins'],
      message: 'please enter correct category for room'
    }
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
      },
      ratings: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema)
export default Room
