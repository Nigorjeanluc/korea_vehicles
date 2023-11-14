const up = async (queryInterface, Sequelize) => queryInterface.createTable('sub_categories', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  vehicle_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  category_id: {
    type: Sequelize.INTEGER,
  },
  progress: {
    type: Sequelize.INTEGER,
  },
  sub_category_id: {
    type: Sequelize.INTEGER,
  },
  expected_delivery_at: {
    allowNull: false,
    type: Sequelize.DATE
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

const down = async (queryInterface) => queryInterface.dropTable('sub_categories');

export default { up, down };
