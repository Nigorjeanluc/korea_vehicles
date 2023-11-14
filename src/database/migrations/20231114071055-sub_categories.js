const up = async (queryInterface, Sequelize) => queryInterface.createTable('sub_categories', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  description: {
    type: Sequelize.STRING,
  },
  category_id: {
    type: Sequelize.INTEGER,
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
