import {addPropietario, getPropietario,getPropietarios,updatePropietario,deletePropietario} from '../controllers/propietarios.controllers.js';
import { Router } from 'express';
const router=Router();

router.post('/propietario',addPropietario);
router.get('/propietario/:id',getPropietario);
router.get('/propietario/',getPropietarios)
router.delete('/propietario/:id',deletePropietario);
router.patch('/propietario/:id',updatePropietario)

export default router;