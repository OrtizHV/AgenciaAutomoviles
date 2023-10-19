import { addAuto,getAuto,getAutos,deleteAuto,updateAuto} from '../controllers/autos.controllers.js';
import { Router } from 'express';
const router=Router();

router.post('/autos',addAuto)
router.get('/autos/:id',getAuto)
router.get('/autos/',getAutos)
router.delete('/autos/:id',deleteAuto)
router.patch('/autos/:id',updateAuto)


export default router;