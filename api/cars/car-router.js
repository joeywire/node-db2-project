const express = require('express'); 
const Car = require('./car-model'); 
const middleware = require('../middleware');

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json(req.car);
  
});

router.get('/:id', middleware.validateCarId, async (req, res) => {
  const { id } = req.params; 
  try {
    const car = await Car.getById(id);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', middleware.validateCarBody, async (req, res) => {
  const car = req.body;
  try {
    //This is 100x better than chained promises 
    const [ newCarId ] = await Car.create(car);
    const newCar = await Car.getById(newCarId);
    res.status(200).json(newCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', middleware.validateCarId, middleware.validateCarBody, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const updatedCar = await Car.update(id, changes);
    res.status(200).json(updatedCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', middleware.validateCarId, async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Car.delete(id);
    res.status(200).json({ message: `Deleted car with id: ${id}`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  } 
});

module.exports = router;