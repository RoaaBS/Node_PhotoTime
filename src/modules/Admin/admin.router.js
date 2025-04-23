import { Router } from 'express';
import * as adminController from '../Admin/admin.controller.js';
import { auth } from '../../Middleware/auth.js';


const router = Router();


router.post('/addAdmin', auth(['superAdmin']), adminController.addAdmin);
router.patch('/changestatus/:id', auth(['superAdmin']), adminController.toggleStatus);
router.get('/admins', auth(['superAdmin']), adminController.getAllAdmins);
router.put('/admin/:id',auth(['superAdmin']),adminController.updateAdmin);
router.delete('/admin/:id',auth(['superAdmin']),adminController.deleteAdmin);

export default router;
