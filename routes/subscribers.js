const express = require('express');
const router = express.Router();
const Subscribers = require('../model/subscriber');

// Get all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscribers.find();
    res.status(200).json({
      subscribers,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Get one
router.get('/:id', async (req, res) => {});

// Create one
router.post('/', async (req, res) => {
  const newSubscriber = Subscribers.create(req.body);

  try {
    res.status(201).json({
      data: { newSubscriber },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Update one
router.patch('/:id', (req, res) => {});

// Delete one
router.delete('/:id', (req, res) => {});

module.exports = router;
