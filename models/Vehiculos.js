'use strict';
const { Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Vehiculos extends Model {
        static associate(models) {
            // Definir asociaciones aquí si es necesario
        }
    }

    Vehiculos.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            placa: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            modelo: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            cilindraje: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            impuesto_base: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING,
                defaultValue: "Activo",
            },
        },
        {
            sequelize,
            modelName: "Vehiculo",
            tableName: "vehiculo",
            timestamps: true,

        }
    );

    return Vehiculos;
};