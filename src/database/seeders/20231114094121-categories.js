const categories = [{
  name: 'Maintenance',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Repair',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Auto Body',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Auto Detailing',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Additional Services',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Car Wash',
  createdAt: new Date(),
  updatedAt: new Date()
}];

const up = (queryInterface) => queryInterface.bulkInsert('categories', categories);
const down = (queryInterface) => queryInterface.bulkDelete('categories', null, {});
export {
  up,
  down
};
