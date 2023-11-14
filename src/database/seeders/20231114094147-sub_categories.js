const sub_categories = [{
  name: 'Oil Change',
  description: "Changing the engine oil and filter.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Brake Check',
  description: " Making sure the brakes are working well.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Tire Rotation',
  description: "Moving tires around to wear them evenly.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Wheel Alignment',
  description: "Adjusting the wheels for better stability.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Battery Replacement',
  description: "Changing old or broken car batteries.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Transmission Service',
  description: "Changing fluids and checking the transmission.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Engine Tune-Up',
  description: "Adjusting and checking key engine parts.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Air Filter Change',
  description: "Putting in a new engine air filter",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Cabin Air Filter',
  description: "Changing the filter for better air inside the car.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Spark Plug Change',
  description: "Putting in new spark plugs for a better engine.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: ' Fluid Check',
  description: "Making sure all fluids (like coolant) are at the right levels.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Belt and Hose Check',
  description: "Looking at and changing worn-out belts and hoses.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Wiper Blade Change',
  description: "Putting in new windshield wiper blades.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Fuel System Clean',
  description: "Cleaning and fixing the fuel injection system.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Radiator Flush',
  description: "Cleaning and changing the coolant in the radiator.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Suspension Check',
  description: "Looking at and fixing the car's suspension system.",
  category_id: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Brake Repair',
  description: "Fixing or changing brake parts.",
  category_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Transmission Repair',
  description: "Fixing issues with the transmission system.",
  category_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Exhaust System Repair',
  description: "Fixing or changing parts of the exhaust system.",
  category_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Engine Repair',
  description: "Fixing problems with the engine",
  category_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'AC System Repair',
  description: "Fixing issues with the car's air conditioning.",
  category_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Steering System Repair',
  description: "Fixing problems with the steering.",
  category_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Electrical System Repair',
  description: "Fixing electrical issues in the car.",
  category_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Suspension Repair',
  description: "Fixing or changing parts of the suspension system.",
  category_id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Dent Removal',
  description: "Taking out dents and fixing the outside of the car.",
  category_id: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Paint Repair',
  description: "Fixing scratches or damaged paint.",
  category_id: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Collision Repair',
  description: "Fixing damage from accidents.",
  category_id: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Interior Detailing',
  description: "Cleaning and fixing up the inside of the car.",
  category_id: 4,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Exterior Detailing',
  description: "Cleaning, waxing, and shining the outside of the car.",
  category_id: 4,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Full Detailing Package',
  description: "Doing a thorough cleaning inside and outside.",
  category_id: 4,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Diagnostic Services',
  description: "Checking and figuring out mechanical problems.",
  category_id: 5,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Towing Services',
  description: "Moving the car if it breaks down.",
  category_id: 5,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Headlight Restoration',
  description: "Making cloudy headlights clear again.",
  category_id: 5,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Windshield Replacement',
  description: "Putting in a new windshield.",
  category_id: 5,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Paint Protection',
  description: "Putting on a coating to keep the paint safe.",
  category_id: 5,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Basic Car Wash',
  description: "Cleaning the outside of the car.",
  category_id: 6,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Deluxe Car Wash',
  description: "Cleaning outside and vacuuming inside.",
  category_id: 6,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Premium Car Wash',
  description: "A more detailed wash, sometimes with waxing.",
  category_id: 6,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  name: 'Express Detailing',
  description: "Quick cleaning of the outside and inside.",
  category_id: 6,
  createdAt: new Date(),
  updatedAt: new Date()
}];

const up = (queryInterface) => queryInterface.bulkInsert('sub_categories', sub_categories);
const down = (queryInterface) => queryInterface.bulkDelete('sub_categories', null, {});
export {
  up,
  down
};
