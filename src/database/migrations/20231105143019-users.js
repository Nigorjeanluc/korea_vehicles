const up = (queryInterface, Sequelize) => queryInterface.createTable('Users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  profileImg: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  coverImg: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.ENUM('CUSTOMER', 'CASHIER', 'COMPANY ADMIN', 'SUPER ADMIN'),
    defaultValue: 'CUSTOMER'
  },
  isVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  created_at: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updated_at: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

const down = (queryInterface) => queryInterface.dropTable('Users');

export { up, down };