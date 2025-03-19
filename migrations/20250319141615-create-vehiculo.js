'use strict';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("vehiculo", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      cilindraje: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      impuesto_base: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        defaultValue: "Activo",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("vehiculo");
  },
};

