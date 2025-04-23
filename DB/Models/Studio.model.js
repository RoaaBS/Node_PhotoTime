import mongoose from 'mongoose';

const studioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  location: { type: String, required: true },
  phone: String,
  email: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  services: [String],

  images: [String],
  pricing: [
    {
      service: String,
      price: Number,
      durationInMinutes: Number
    }
  ]
}, {
  timestamps: true
});

export default mongoose.models.Studio || mongoose.model('Studio', studioSchema);
