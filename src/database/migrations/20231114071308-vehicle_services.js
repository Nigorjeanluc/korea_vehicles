const up = async (queryInterface, Sequelize) => queryInterface.createTable('vehicle_services', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  vehicle_id: {
    type: Sequelize.INTEGER,
  },
  insurance_issue_date: {
    allowNull: false,
    type: Sequelize.DATE
  },
  insurance_period: {
    type: Sequelize.STRING
  },
  inspection_date: {
    allowNull: false,
    type: Sequelize.DATE
  },
  inspection_period: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

const down = async (queryInterface) => queryInterface.dropTable('vehicle_services');

export default { up, down };
