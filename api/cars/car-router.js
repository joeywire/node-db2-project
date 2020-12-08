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

module.exports = router;