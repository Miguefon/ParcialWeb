const express = require('express');
const router = express.Router();
const VehiculoController = require('../controller/VehiculosController');



//get all
router.get('/', VehiculoController.getAllVehiculos);

//get by id
router.get('/:id', VehiculoController.getVehiculosById);

// crear vehiculo
router.post('/addvehiculo', VehiculoController.addVehiculo);

// actualizar datos
router.put('/:id', VehiculoController.updateCarro);
//cambiar estado (activar o desactivar)
router.put('/estadoVehiculo/:id', VehiculoController.changeStatusVehiculo);


module.exports = router;