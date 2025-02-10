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
router.get('/:id', async (req, res) => {
  const subscriber = new Subscribers({
    name: req.body.name,
    subscribeChannel: req.body.subscribeChannel,
    subscriberDate: req.body.subscriberDate,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json({
      newSubscriber,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Create one
router.post('/', (req, res) => {});

// Update one
router.patch('/:id', (req, res) => {});

// Delete one
router.delete('/:id', (req, res) => {});

module.exports = router;
