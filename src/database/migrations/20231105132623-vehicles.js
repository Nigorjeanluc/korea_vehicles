const up = async (queryInterface, Sequelize) => queryInterface.createTable('vehicles', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  VIN: {
    type: Sequelize.STRING,
    unique: true
  },
  model_year: {
    type: Sequelize.INTEGER
  },
  immatriculation_number: {
    type: Sequelize.STRING,
    unique: true
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  created_at: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updated_at: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

const down = async (queryInterface) => queryInterface.dropTable('vehicles');

export default { up, down };
