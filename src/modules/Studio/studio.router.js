
import express from "express";
import {createStudio,getAllStudios,getStudioById,updateStudio,deleteStudio} from "../Studio/studio.controller.js";
import  {auth}  from '../../Middleware/auth.js';
import fileUpload,{fileValidation} from '../../utilitys/multer.js';
const router = express.Router();


router.post('/create',auth(['superAdmin']),createStudio);
router.get("/", getAllStudios);
router.get("/:id", getStudioById);
router.put("/:id", auth(['superAdmin']), updateStudio);
router.delete("/:id", auth(['superAdmin']),deleteStudio);

export default router;
