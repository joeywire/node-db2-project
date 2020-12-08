const express = require('express'); 
const Car = require('./car-model'); 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Car.getAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params; 
  try {
    const car = await Car.getById(id);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
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

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const updatedCar = await Car.update(id, changes);
    res.status(200).json(updatedCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Car.delete(id);
    res.status(200).json({ message: `Deleted car with id: ${id}`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  } 
});

module.exports = router;