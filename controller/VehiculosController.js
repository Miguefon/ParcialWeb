const {Vehiculo} = require("../models");

const addVehiculo = async (req, res) => {
    try {
        const {placa, modelo, cilindraje, impuesto_base} = req.body;
        const newVehiculo = await Vehiculo.create({
            placa,
            modelo,
            cilindraje,
            impuesto_base
        });
        return res.status(201).json(newVehiculo);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const getAllVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll();
        return res.status(200).json(vehiculos);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const getVehiculosById = async (req, res) => {
    try {
        const {id} = req.params;
        const vehiculo = await Vehiculo.findOne({
            where: {id}
        });
        if (vehiculo) {
            return res.status(200).json(vehiculo);
        } else {
            return res.status(404).send("Vehiculo no encontrado");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const updateCarro = async(req, res) =>{
    try {
        const {id} = req.params;
        const {placa, modelo, cilindraje, impuesto_base} = req.body;

        const vehiculo = await Vehiculo.findByPk(id);
        if(!vehiculo){
            return res.status(404).json({message:"Vehiculo no encontrado"});
        }

        if (placa) vehiculo.placa = placa;
        if (modelo) vehiculo.modelo = modelo;
        if(cilindraje) vehiculo.cilindraje=cilindraje;
        if(impuesto_base) vehiculo.impuesto_base=impuesto_base;
        await vehiculo.save();
        return res.status(200).json({message:"Vehiculo actualizado", Vehiculo})
    } catch (error) {
        res.status(500).json({error: error.message})

    }
}

const changeStatusVehiculo = async (req, res) => {
    try {
        const { id } = req.params; // ID del vehiculo recibido en la URL
        const { estado } = req.body; // Estado recibido en el cuerpo de la petición

        // Validar que el estado sea "Activo" o "Inactivo"
        if (!["Activo", "Inactivo"].includes(estado)) {
            return res.status(400).json({ error: "Estado inválido. Use 'Activo' o 'Inactivo'." });
        }

        // Buscar el Vehiculo por ID
        const vehiculo = await Vehiculo.findByPk(id);
        if (!vehiculo) {
            return res.status(404).json({ error: "Vehiculo no encontrado" });
        }

        // Actualizar el estado del vehiculo
        vehiculo.estado = estado;
        await vehiculo.save();

        res.json({ message: `Estado actualizado a ${estado}`, vehiculo });
    } catch (error) {
        console.error("Error al cambiar estado:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = {
    addVehiculo, 
    getAllVehiculos, 
    getVehiculosById,
    updateCarro,
    changeStatusVehiculo }
