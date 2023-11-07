const vehicles = [{
  VIN: 'FHSHS3465346XNNN',
  model_year: 2020,
  immatriculation_number: 'RAA234W',
  user_id: 1,
  created_at: new Date(),
  updated_at: new Date()
}, {
  VIN: 'FHSHS3465346XNNXN',
  model_year: 2021,
  immatriculation_number: 'RAA234H',
  user_id: 1,
  created_at: new Date(),
  updated_at: new Date()
}, {
  VIN: 'FHSHS34653426XNNXN',
  model_year: 2023,
  immatriculation_number: 'RAE234H',
  user_id: 1,
  created_at: new Date(),
  updated_at: new Date()
}];

const up = (queryInterface) => queryInterface.bulkInsert('vehicles', vehicles);
const down = (queryInterface) => queryInterface.bulkDelete('vehicles', null, {});
export {
  up,
  down
};
