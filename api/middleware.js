const Car = require("./cars/car-model");

const validateCarId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await Car.getById(id);
    if (!car) {
      res.status(404).json({ message: `Car with id of ${id} not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const validateCarBody = async (req, res, next) => {
  const car = req.body;
  if (!car.vin || !car.make || !car.model || !car.mileage) {
    res.status(404).json({ message: "Vin, Make, Model, and Mileage are required fields!"})
  } else next();
};


module.exports = {
  validateCarId,
  validateCarBody
};
