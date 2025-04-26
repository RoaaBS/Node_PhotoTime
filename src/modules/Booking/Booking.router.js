import express from "express";
import {createBooking,getMyBookings,getStudioBookings,updateBookingStatus} from "../Booking/Booking.controller.js";
import {auth} from "../../Middleware/auth.js";

const router = express.Router();


router.post("/create", auth(["user"]), createBooking);
router.get("/", auth(["user"]), getMyBookings);
router.get("/studio/:studioId", auth(["studio", "superAdmin"]), getStudioBookings);
router.patch("/:id/status", auth(["studio", "superAdmin"]), updateBookingStatus);

export default router;
