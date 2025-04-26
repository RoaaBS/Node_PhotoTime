import Booking from "../../../DB/Models/Booking.model.js";

export const createBooking = async (req, res) => {
    try {
      const booking = new Booking({
        ...req.body,
        user: req.id
      });
      await booking.save();
      res.status(201).json({ message: "Booking created successfully", booking });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  


export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.id }).populate("studio", "name");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getStudioBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ studio: req.params.studioId }).populate("user", "name");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
