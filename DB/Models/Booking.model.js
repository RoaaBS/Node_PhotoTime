import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  studio: { type: mongoose.Schema.Types.ObjectId, ref: "Studio", required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true }, 
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending"
  },
  price: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
