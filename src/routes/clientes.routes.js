import { addCliente,deleteCliente,getCliente,getClientes,updateCliente} from '../controllers/clientes.controllers.js';
import { Router } from 'express';
const router=Router();

router.post('/clientes',addCliente);
router.get('/clientes/:id',getCliente);
router.get('/clientes/',getClientes)
router.delete('/clientes/:id',deleteCliente);
router.patch('/clientes/:id',updateCliente);

export default router;