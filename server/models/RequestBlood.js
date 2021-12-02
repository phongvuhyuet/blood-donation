import mongoose from 'mongoose'

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
  },
  identity_card: {
    type: String,
    required: true,
  },
  blood_type: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
})

const RequestBlood = mongoose.model('RequestBlood', schema, 'requestBlood')

export default RequestBlood
