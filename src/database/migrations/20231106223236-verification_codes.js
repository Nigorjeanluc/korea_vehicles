const up = (queryInterface, sequelize) => queryInterface.createTable('verification_codes', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  user_id: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  value: {
    type: sequelize.STRING
  },
  created_at: {
    type: sequelize.DATE,
  },
  updated_at: {
    type: sequelize.DATE,
  },
});
const down = (queryInterface) => queryInterface.dropTable('verification_codes');

export default {
  up,
  down
}
